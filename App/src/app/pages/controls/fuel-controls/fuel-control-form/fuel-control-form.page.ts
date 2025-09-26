import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FuelControlService} from '../../../../services/v1/fuel-control.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {FuelControl} from '../../../../interfaces/FuelControl';
import {ImageDetailComponent} from '../../../../components/modals/image-detail/image-detail.component';
import {CameraPhotoFile} from '../../../../interfaces/CameraPhotoFile';
import {ToastComponent} from '../../../../components/toast/toast.component';
import {CameraService} from '../../../../services/utils/camera.service';
import {AuthService} from '../../../../services/v1/auth.service';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpUploadFileService} from '../../../../services/utils/http-upload-file.service';
import {DateService} from '../../../../services/utils/date.service';

@Component({
  selector: 'app-fuel-control-form',
  templateUrl: './fuel-control-form.page.html',
  styleUrls: ['./fuel-control-form.page.scss'],
})
export class FuelControlFormPage implements OnInit {
  @Input() fuelControl: FuelControl;
  form: FormGroup;
  showInputErrorMessage = false;
  submitting = false;
  today = new Date();
  maxYear: number;
  minYear: number;

  files: CameraPhotoFile[] = [];
  fuelControlId: string;
  uploadedFilesIndexes: number[] = [];
  uploadingErrorFilesIndexes: number[] = [];
  uploadingFileIndex: number;
  authToken: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              public sanitizer: DomSanitizer,
              private dateService: DateService,
              private httpUploadFileService: HttpUploadFileService,
              private toastComponent: ToastComponent,
              private cameraService: CameraService,
              private modalController: ModalController,
              private fuelControlService: FuelControlService) {
    this.maxYear = this.today.getFullYear() + 2;
    this.minYear = this.today.getFullYear() - 1;

    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      station: [''],
      fuelType: [''],
      liters: [''],
      price: ['']
    });
  }

  ngOnInit() {
    if (this.fuelControl) {
      this.setFuelControl();
    }

    this.authService.getAuthToken().then(authToken => {
      this.authToken = authToken;
    });

    this.form.controls.date.setValue(this.dateService.getToday());
  }

  setFuelControl() {
    this.form.controls.date.setValue(this.fuelControl.date);
    this.form.controls.station.setValue(this.fuelControl.station);
    this.form.controls.fuelType.setValue(this.fuelControl.fuel_type);
    this.form.controls.liters.setValue(this.fuelControl.liters);
    this.form.controls.price.setValue(this.fuelControl.price);
  }

  submit() {
    if (this.form.valid) {
      this.showInputErrorMessage = false;
      this.fuelControl ? this.updateFuelControl() : this.storeFuelControl();
    } else {
      this.showInputErrorMessage = true;
    }
  }

  storeFuelControl() {
    this.submitting = true;
    const body = this.setBody();
    this.fuelControlService.storeFuelControl(body)
      .subscribe((response: any) => {
        this.fuelControlId = response.fuel_control_id;
        if (this.files.length > 0) {
          this.checkFiles();
        } else {
          this.closeModal();
        }
      }, error => {
        this.submitting = false;
      });
  }

  updateFuelControl() {
    this.submitting = true;
    const body = this.setBody();
    this.fuelControlService.updateFuelControl(this.fuelControl, body)
      .subscribe((response: any) => {
        this.fuelControlId = response.fuel_control_id;
        if (this.files.length > 0) {
          this.checkFiles();
        } else {
          this.closeModal();
        }
      }, error => {
        this.submitting = false;
      });
  }

  setBody() {
    return {
      date: this.form.value.date,
      station: this.form.value.station,
      fuel_type: this.form.value.fuelType,
      liters: this.form.value.liters,
      price: this.form.value.price
    };
  }

  async viewControlImageDetail(file: CameraPhotoFile) {
    const modal = await this.modalController.create({
      component: ImageDetailComponent,
      componentProps: {file}
    });
    await modal.present();
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
        fuel_control_id: this.fuelControlId.toString()
      };
      this.httpUploadFileService.uploadFile('fuel-control-images', file, this.authToken, body)
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
          this.toastComponent.presentToast('No se pudo carga la imagen del control de combustible. Intente nuevamente', 'medium', 2500);
        });
    });
  }

  checkFiles() {
    this.uploadedFilesIndexes = [];
    this.uploadingErrorFilesIndexes = [];

    this.uploadFiles().then(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.form.reset();
    this.submitting = false;
    this.dismiss(true);
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

  deleteImage(i) {
    this.files.splice(i, 1);
  }

}
