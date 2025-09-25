import {Component, Input, OnInit} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {LoadingController, ModalController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {ToastComponent} from '../../toast/toast.component';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpUploadFileService} from '../../../services/utils/http-upload-file.service';
import {CameraPhotoFile} from '../../../interfaces/CameraPhotoFile';
import {CameraService} from '../../../services/utils/camera.service';
import {AuthService} from '../../../services/v1/auth.service';
import {ImageDetailComponent} from '../image-detail/image-detail.component';
import {Order} from '../../../interfaces/Order';
import {OrderService} from '../../../services/v1/order.service';
import {FormControl} from '@angular/forms';
import {GeolocationService} from '../../../services/v1/geolocation.service';
import {Geoposition} from '@ionic-native/geolocation';
import {OrderManagerService} from '../../../services/v1/order-manager.service';
import {OfflineOrderManagerService} from '../../../services/v1/offline-order-manager.service';
import {ModeService} from '../../../services/utils/mode.service';

@Component({
  selector: 'app-deliver-order',
  templateUrl: './deliver-order.component.html',
  styleUrls: ['./deliver-order.component.scss'],
})
export class DeliverOrderComponent implements OnInit {
  @Input() order: Order;
  files: CameraPhotoFile[] = [];
  submitting = false;
  uploadedFilesIndexes: number[] = [];
  uploadingErrorFilesIndexes: number[] = [];
  uploadingFileIndex: number;
  authToken: string;
  saveClientFC = new FormControl();
  driverPosition: Geoposition;
  currentMode: any;

  constructor(private authService: AuthService,
              private storage: Storage,
              public sanitizer: DomSanitizer,
              private orderManagerService: OrderManagerService,
              private orderService: OrderService,
              private cameraService: CameraService,
              private geolocationService: GeolocationService,
              private httpUploadFileService: HttpUploadFileService,
              private offlineOrderManagerService: OfflineOrderManagerService,
              private loadingController: LoadingController,
              private modalController: ModalController,
              private toastComponent: ToastComponent,
              private modeService: ModeService,
              private barcodeScanner: BarcodeScanner) {
  }

  ngOnInit() {
    this.checkWatchLocationsSubscription();

    this.storage.get('auth_token').then(authToken => {
      this.authToken = authToken;
    });

    this.currentMode = this.modeService.getCurrentModeStatus();
    console.log(this.currentMode);
  }

  checkWatchLocationsSubscription() {
    if (!this.geolocationService.checkWatchLocationsSubscription()) {
      this.geolocationService.watchPosition();
    }
  }

  takePicture() {
    this.cameraService.takePicture().then((cameraPhotoFile: CameraPhotoFile) => {
      this.files.push(cameraPhotoFile);
    }).catch(err => {
      this.toastComponent.presentToast(
        `No se pudo acceder a la cámara (error: ${err})`,
        'middle',
        3000,
      );
    });
  }

  async uploadFiles() {
    let i = 0;
    this.uploadingFileIndex = i;
    for (const file of this.files) {
      await this.uploadFile(file.file)
        .then(() => {
          this.uploadedFilesIndexes.push(i);
        })
        .catch(err => {
          this.uploadingErrorFilesIndexes.push(i);
        }).finally(() => {
          i++;
          this.uploadingFileIndex = i;
        });
    }
  }

  uploadFile(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        order_id: this.order.id.toString()
      };
      // this.httpUploadFileService.uploadFile('delivery-images', file, this.authToken, body)
      this.orderManagerService.uploadFile(this.order, body, file, this.authToken)
        .subscribe(() => {
          resolve(true);
        }, error => {
          reject(error);
          this.toastComponent.presentToast('No se pudo carga la imagen de entrega. Intente nuevamente', 'medium', 2500);
        });
    });
  }

  async viewImage(file: CameraPhotoFile) {
    const modal = await this.modalController.create({
      component: ImageDetailComponent,
      componentProps: {file}
    });
    await modal.present();
  }

  dismiss(success) {
    console.log('clicking dismiss');
    if (success) {
      this.order.status = 'delivered';
      this.order.status_es = 'entregada';
      this.orderService.setOrdersUpdated$(true);
    }
    this.modalController.dismiss({success});
  }

  submit() {
    this.submitting = true;
    this.uploadedFilesIndexes = [];
    this.uploadingErrorFilesIndexes = [];
    this.driverPosition = this.geolocationService.getDriverPosition();

    this.uploadFiles().then(() => {
      console.log('finished uploading files...');
      const body = {
        status: 'delivered',
        save_client: this.saveClientFC.value,
        lat: this.driverPosition.coords.latitude,
        lng: this.driverPosition.coords.longitude
      };
      this.orderManagerService.setDeliveredOrder(this.order, body)
        .subscribe((response: any) => {
          this.submitting = false;
          this.dismiss(true);
        });
    }).catch(err => {
      this.submitting = false;
    });
  }

  deleteImage(i) {
    this.files.splice(i, 1);
  }

}
