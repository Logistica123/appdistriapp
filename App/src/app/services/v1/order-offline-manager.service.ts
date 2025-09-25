import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Order} from '../../interfaces/Order';
import {Location} from '../../interfaces/Location';
import {Validators} from '@angular/forms';

const STORAGE_REQ_KEY_ORDERS = 'distriapporders';
const STORAGE_REQ_KEY_REQS = 'distriappreqs';

@Injectable({
  providedIn: 'root'
})
export class OrderOfflineManagerService {
  defaultLat = -27.4862341;
  defaultLng = -58.8624276;

  constructor(private storage: Storage) {
  }

  storeLocation(body) {
    console.log(body);

    const address = body.address
      ? body.address
      : `${body.b} ${body.v} ${body.s} ${body.m} ${body.c}`;

    const location: Location = {
      uid: this.generateId(),
      name: address,
      b: body.b,
      v: body.v,
      s: body.s,
      m: body.m,
      c: body.c,
      address,
      city: body.city,
      lat: this.defaultLat,
      lng: this.defaultLng,
      full_address: `${address}, ${body.city}`,
      api_geocoded: false,
      saved_client: false
    };

    const order: Order = {
      uid: this.generateId(),
      status: 'pending',
      status_es: 'pendiente',
      receiver: body.company_name,
      description: body.details,
      phone: body.phone,
      date: body.date,
      location_id: body.location_id,
      not_delivered_motive: '',
      not_delivered_description: '',
      type: body.type,
      flag_color: body.flag_color,
      location
    };

    return this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
      if (orders?.length > 0) {
        orders.push(order);
      } else {
        orders = [];
        orders.push(order);
      }
      return this.storage.set(STORAGE_REQ_KEY_ORDERS, orders);
    });
  }

  storeOrder(body): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const location: Location = {
        uid: this.generateId(),
        name: body.location_name,
        b: body.b,
        v: body.v,
        s: body.s,
        m: body.m,
        c: body.c,
        address: body.location_address,
        city: body.location_city,
        lat: body.location_lat,
        lng: body.location_lng,
        full_address: `${body.location_name}, ${body.location_address}, ${body.location_city}`,
        saved_client: body.saved_client
      };

      const order: Order = {
        uid: this.generateId(),
        status: 'pending',
        status_es: 'pendiente',
        receiver: body.company_name,
        description: body.details,
        phone: body.phone,
        date: body.date,
        location_id: body.location_id,
        not_delivered_motive: '',
        not_delivered_description: '',
        type: body.type,
        flag_color: body.flag_color,
        location
      };

      this.storage.get(STORAGE_REQ_KEY_ORDERS)
        .then(orders => {
          if (orders?.length > 0) {
            orders.push(order);
          } else {
            orders = [];
            orders.push(order);
          }
          this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
            .then(() => {
              resolve(order);
            }).catch(err => {
            reject();
          });
        }).catch(err => {
        reject();
      });
    });
  }

  deleteOrder(order: Order): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
        console.log(orders);
        if (orders?.length > 0) {
          // eliminamos la orden de localstorage
          const filteredOrders = orders.filter(storedOrder => storedOrder.uid !== order.uid);
          console.log(filteredOrders);
          this.storage.set(STORAGE_REQ_KEY_ORDERS, filteredOrders)
            .then(() => {
              // eliminamos el request...
              this.storage.get(STORAGE_REQ_KEY_REQS).then(requests => {
                const filteredRequests = requests.filter(storedReq => storedReq.pUid !== order.uid);
                console.log(filteredRequests);
                this.storage.set(STORAGE_REQ_KEY_REQS, filteredRequests)
                  .then(() => {
                    resolve(true);
                  });
              });
            });
        }
      });
    });
  }

  updateOrder(order: Order, body): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
        console.log(orders);
        if (orders?.length > 0) {
          const orderToUpdateIndex = orders.map(storedOrder => {
            return storedOrder.uid;
          }).indexOf(order.uid);
          if (orderToUpdateIndex > -1) {
            orders[orderToUpdateIndex].receiver = body.receiver;
            orders[orderToUpdateIndex].description = body.description;
            orders[orderToUpdateIndex].phone = body.phone;
            orders[orderToUpdateIndex].city = body.city;
            orders[orderToUpdateIndex].address = body.address;
            orders[orderToUpdateIndex].b = body.b;
            orders[orderToUpdateIndex].v = body.v;
            orders[orderToUpdateIndex].s = body.s;
            orders[orderToUpdateIndex].m = body.m;
            orders[orderToUpdateIndex].c = body.c;
          }
          this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
            .then(() => {
              resolve(true);
            });
        }
      });
    });
  }

  setDeliveredOrder(order: Order): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
        console.log(orders);
        if (orders?.length > 0) {
          const orderToUpdateIndex = orders.map(storedOrder => {
            return storedOrder.uid;
          }).indexOf(order.uid);
          if (orderToUpdateIndex > -1) {
            orders[orderToUpdateIndex].status = 'delivered';
            orders[orderToUpdateIndex].status_es = 'entregada';
          }
          this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
            .then(() => {
              resolve(true);
            });
        }
      });
    });
  }

  setNotDeliveredOrder(order: Order, body): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
        console.log(orders);
        if (orders?.length > 0) {
          const orderToUpdateIndex = orders.map(storedOrder => {
            return storedOrder.uid;
          }).indexOf(order.uid);
          if (orderToUpdateIndex > -1) {
            console.log(orders[orderToUpdateIndex]);
            orders[orderToUpdateIndex].status = 'not-delivered';
            orders[orderToUpdateIndex].status_es = 'no entregada';
            orders[orderToUpdateIndex].not_delivered_motive = body.not_delivered_motive;
            orders[orderToUpdateIndex].not_delivered_description = body.not_delivered_description;
            orders[orderToUpdateIndex].name = body.location_name;
            orders[orderToUpdateIndex].location.name = body.location_address;
            orders[orderToUpdateIndex].location.address = body.location_address;
            orders[orderToUpdateIndex].location.b = body.b;
            orders[orderToUpdateIndex].location.v = body.v;
            orders[orderToUpdateIndex].location.s = body.s;
            orders[orderToUpdateIndex].location.m = body.m;
            orders[orderToUpdateIndex].location.c = body.c;
            orders[orderToUpdateIndex].save_client = body.save_client;
          }
          this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
            .then(() => {
              resolve(true);
            });
        }
      });
    });
  }

  getOrders() {
    return this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
      console.log(orders);
      if (orders?.length > 0) {
        return orders;
      } else {
        return [];
      }
    });
  }

  getLocalOrderId(orderUid: string): Promise<any> {
    console.log('GETTING LOCAL ORDER by orderUid', orderUid);
    return new Promise<any>((resolve, reject) => {
      this.storage.get(STORAGE_REQ_KEY_ORDERS)
        .then(orders => {
          console.log(orders);
          if (orders?.length > 0) {
            const filteredOrder: Order = orders.filter(order => order.uid === orderUid)[0];
            console.log('filtered order: ', filteredOrder);
            if (filteredOrder) {
              resolve(filteredOrder);
            }
          }
          reject('local order not found');
        }).catch(err => {
        reject(err);
      });
    });
  }

  storeOrdersInStorage(orders: Order[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
        .then(() => {
          resolve(orders);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  deleteOrdersInStorage(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.set(STORAGE_REQ_KEY_ORDERS, [])
        .then(() => {
          resolve(true);
        }).catch(err => {
        reject(err);
      });
    });
  }

  updateLocalOrderId(orderId, orderUid): Promise<any> {
    console.log('UPDATING LOCAL ORDER ID');
    return new Promise<any>((resolve, reject) => {
      this.storage.get(STORAGE_REQ_KEY_ORDERS)
        .then(orders => {
          if (orders?.length > 0) {
            const index = orders.map(order => {
              return order.uid;
            }).indexOf(orderUid);
            console.log(index);
            if (index > -1) {
              orders[index].id = orderId;
            }
            this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
              .then(() => {
                resolve(orders[index]);
              }).catch(err => {
              reject(err);
            });
          }
        }).catch(err => {
        reject(err);
      });
    });
  }

  generateId(): string {
    return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '').substr(0, 5)
      + (Math.floor(Math.random() * 90 + 10));
  }
}
