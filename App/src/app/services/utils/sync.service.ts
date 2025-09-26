import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ToastComponent} from '../../components/toast/toast.component';
import {Storage} from '@ionic/storage';
import {SyncRequestOrderService} from './sync-request-order.service';

const STORAGE_REQ_KEY_ORDERS = 'distriapporders';
const STORAGE_REQ_KEY_REQS = 'distriappreqs';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private syncing$ = new BehaviorSubject<boolean>(false);
  private syncingError$ = new BehaviorSubject<boolean>(false);

  constructor(private toastComponent: ToastComponent,
              private syncRequestOrderService: SyncRequestOrderService,
              private storage: Storage) {
    this.syncRequestOrderService.getCompletedSync$()
      .subscribe(completedSync => {
        console.log(`completedSync: ${completedSync}`);
        if (completedSync) {
          this.checkIfAllSynced();
        }
      });
  }

  sync() {
    console.log('syncing...');
    this.setSyncing$(true);
    this.storage.get(STORAGE_REQ_KEY_REQS)
      .then(storedReqs => {
        if (storedReqs) {
          this.syncRequestOrderService.syncStoredOrdersRequests(storedReqs)
            .then(res => {
              // this.checkIfAllSynced();
              // this.setSyncing$(false);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log('nothing to be sent');
          this.setSyncing$(false);
        }
      })
      .catch(err => {
        console.log(err);
        this.setSyncing$(false);
      });
  }

  checkIfAllSynced() {
    console.log('checking if all synced...');
    this.storage.get(STORAGE_REQ_KEY_REQS)
      .then(storedReqs => {
        console.log(`checking stored requests:`, storedReqs);
        console.log(storedReqs?.length > 0);
        if (storedReqs?.length > 0) {
          console.log('Ocurrió un error...');
          this.setSyncingError$(true);
        } else {
          this.deleteOrdersFromLocalStorage();
        }
      });
  }

  deleteOrdersFromLocalStorage() {
    console.log('deleting from local storage...');
    this.storage.remove(STORAGE_REQ_KEY_ORDERS)
      .then(() => {
        this.setSyncingError$(false);
        this.setSyncing$(false);
      });
  }

  deleteRequestsFromLocalStorage() {
    this.storage.remove(STORAGE_REQ_KEY_REQS);
  }

  async abortSync() {
    console.log('aborting sync...');
    await this.deleteRequestsFromLocalStorage();
    this.deleteOrdersFromLocalStorage();
  }

  getSyncing$(): Observable<boolean> {
    return this.syncing$.asObservable();
  }

  setSyncing$(syncing) {
    this.syncing$.next(syncing);
  }

  getSyncingError$(): Observable<boolean> {
    return this.syncingError$.asObservable();
  }

  setSyncingError$(syncing) {
    this.syncingError$.next(syncing);
  }

  presentSyncedToast() {
    this.toastComponent.presentToast(
      'Sincronización finalizada',
      'bottom',
      2000,
      'success'
    );
  }
}
