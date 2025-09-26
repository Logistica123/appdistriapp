import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../../interfaces/Order';
import {Router} from '@angular/router';
import {OrderService} from '../../../services/v1/order.service';
import {NotDeliveredComponent} from '../../../components/modals/not-delivered/not-delivered.component';
import {ModalController, PopoverController} from '@ionic/angular';
import {DeliverOrderComponent} from '../../../components/modals/deliver-order/deliver-order.component';
import {CallNumberService} from '../../../services/utils/call-number.service';
import {PopoverItemOptionsComponent} from '../popover-item-options/popover-item-options.component';
import {UrbanDistributionDetailPage} from '../urban-distribution-detail/urban-distribution-detail.page';

@Component({
  selector: 'app-urban-distribution-order-item',
  templateUrl: './urban-distribution-order-item.component.html',
  styleUrls: ['./urban-distribution-order-item.component.scss'],
})
export class UrbanDistributionOrderItemComponent implements OnInit {
  @Input() order: Order;
  @Input() i: number;
  @Output() deletedOrderEvent = new EventEmitter<Order>();

  constructor(private router: Router,
              private modalController: ModalController,
              private popoverController: PopoverController,
              private callNumberService: CallNumberService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    console.log(this.order);
  }

  async viewOrderDetail(order: Order) {
    const modal = await this.modalController.create({
      component: UrbanDistributionDetailPage,
      componentProps: {order},
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data?.success) {
      this.deletedOrderEvent.emit(this.order);
    }
  }

  async showNotDeliverOptions(order: Order) {
    const modal = await this.modalController.create({
      component: NotDeliveredComponent,
      cssClass: 'modal-not-deliver-options',
      componentProps: {order},
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data?.success) {
      this.order.status = 'not-delivered';
      this.order.status_es = 'no entregada';
    }
  }

  async deliverOrder(order: Order) {
    const modal = await this.modalController.create({
      component: DeliverOrderComponent,
      componentProps: {order},
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data?.success) {
      this.order.status = 'delivered';
      this.order.status_es = 'entregada';
    }
  }

  callNumber(order: Order) {
    this.callNumberService.call(order.phone);
  }

  async showItemOptions(order: Order, ev) {
    const popover = await this.popoverController.create({
      component: PopoverItemOptionsComponent,
      componentProps: {order},
      event: ev
    });
    await popover.present();
    const {data} = await popover.onWillDismiss();
    if (data?.success) {
      //
    }
  }

}
