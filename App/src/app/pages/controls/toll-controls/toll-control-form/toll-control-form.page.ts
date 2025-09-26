import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {TollControl} from '../../../../interfaces/TollControl';
import {TollControlService} from '../../../../services/v1/toll-control.service';
import {ImageDetailComponent} from '../../../../components/modals/image-detail/image-detail.component';
import {CameraPhotoFile} from '../../../../interfaces/CameraPhotoFile';
import {ToastComponent} from '../../../../components/toast/toast.component';
import {CameraService} from '../../../../services/utils/camera.service';
import {AuthService} from '../../../../services/v1/auth.service';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpUploadFileService} from '../../../../services/utils/http-upload-file.service';
import {DateService} from '../../../../services/utils/date.service';

@Component({
  selector: 'app-toll-control-form',
  templateUrl: './toll-control-form.page.html',
  styleUrls: ['./toll-control-form.page.scss'],
})
export class TollControlFormPage implements OnInit {
  @Input() tollControl: TollControl;
  form: FormGroup;
  showInputErrorMessage = false;
  submitting = false;
  today = new Date();
  maxYear: number;
  minYear: number;

  files: CameraPhotoFile[] = [];
  tollControlId: string;
  uploadedFilesIndexes: number[] = [];
  uploadingErrorFilesIndexes: number[] = [];
  uploadingFileIndex: number;
  authToken: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private dateService: DateService,
              public sanitizer: DomSanitizer,
              private httpUploadFileService: HttpUploadFileService,
              private toastComponent: ToastComponent,
              private cameraService: CameraService,
              private modalController: ModalController,
              private tollControlService: TollControlService) {
    this.maxYear = this.today.getFullYear() + 2;
    this.minYear = this.today.getFullYear() - 1;

    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      station: [''],
      total: ['']
    });
  }

  ngOnInit() {
    if (this.tollControl) {
      this.setTollControl();
    }

    this.authService.getAuthToken().then(authToken => {
      this.authToken = authToken;
    });

    this.form.controls.date.setValue(this.dateService.getToday());
  }

  setTollControl() {
    this.form.controls.date.setValue(this.tollControl.date);
    this.form.controls.station.setValue(this.tollControl.station);
    this.form.controls.total.setValue(this.tollControl.total);
  }

  submit() {
    if (this.form.valid) {
      this.showInputErrorMessage = false;
      this.tollControl ? this.updateTollControl() : this.storeTollControl();
    } else {
      this.showInputErrorMessage = true;
    }
  }

  storeTollControl() {
    this.submitting = true;
    const body = this.setBody();
    this.tollControlService.storeTollControl(body)
      .subscribe((response: any) => {
        this.tollControlId = response.toll_control_id;
        if (this.files.length > 0) {
          this.checkFiles();
        } else {
          this.closeModal();
        }
      }, error => {
        this.submitting = false;
      });
  }

  updateTollControl() {
    this.submitting = true;
    const body = this.setBody();
    this.tollControlService.updateTollControl(this.tollControl, body)
      .subscribe((response: any) => {
        this.tollControlId = response.toll_control_id;
        if (this.files.length > 0) {
          this.checkFiles();
        } else {
          this.closeModal();
        }
      }, error => {
        this.submitting = false;
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
        toll_control_id: this.tollControlId.toString()
      };
      this.httpUploadFileService.uploadFile('toll-control-images', file, this.authToken, body)
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
          this.toastComponent.presentToast('No se pudo carga la imagen del control de peaje. Intente nuevamente', 'medium', 2500);
        });
    });
  }

  setBody() {
    return {
      date: this.form.value.date,
      station: this.form.value.station,
      total: this.form.value.total,
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
      if (err !== 'No Image Selected') {
        this.toastComponent.presentToast(
          `No se pudo acceder a la cámara (error: ${err})`,
          'middle',
          3000,
        );
      }
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
