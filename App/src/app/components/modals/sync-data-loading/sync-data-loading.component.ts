import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {OfflineOrderManagerService} from '../../../services/v1/offline-order-manager.service';
import {SyncService} from '../../../services/utils/sync.service';
import {SyncRequestOrderService} from '../../../services/utils/sync-request-order.service';

@Component({
  selector: 'app-sync-data-loading',
  templateUrl: './sync-data-loading.component.html',
  styleUrls: ['./sync-data-loading.component.scss'],
})
export class SyncDataLoadingComponent implements OnInit, OnDestroy {
  loading = true;
  uploadedP = 0;
  uploadedPSubscription: any;
  syncingSubscription: any;
  syncErrorSubscription: any;
  syncingError = false;

  constructor(private offlineOrderManagerService: OfflineOrderManagerService,
              private syncService: SyncService,
              private syncRequestOrderService: SyncRequestOrderService,
              private popoverController: PopoverController) {
  }

  ngOnInit() {
    this.uploadedPSubscription = this.syncRequestOrderService.getUploadedP$()
      .subscribe(uploadedP => {
        this.uploadedP = uploadedP;
      });

    this.syncingSubscription = this.syncService.getSyncing$()
      .subscribe(syncing => {
        console.log(`syncing: ${syncing}`);
        if (!syncing) {
          this.dismiss(true);
        }
      });

    this.syncErrorSubscription = this.syncService.getSyncingError$()
      .subscribe(syncingError => {
        this.syncingError = syncingError;
      });
  }

  ngOnDestroy(): void {
    if (this.uploadedPSubscription) {
      this.uploadedPSubscription.unsubscribe();
    }

    if (this.syncingSubscription) {
      this.syncingSubscription.unsubscribe();
    }

    if (this.syncErrorSubscription) {
      this.syncErrorSubscription.unsubscribe();
    }

    this.uploadedP = 0;
  }

  retry() {
    this.syncService.sync();
  }

  abort() {
    this.syncService.abortSync();
  }

  dismiss(success) {
    this.popoverController.dismiss({success});
  }

}
