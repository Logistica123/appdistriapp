import {Component, OnInit} from '@angular/core';
import {Driver} from '../../../interfaces/Driver';
import {FormBuilder} from '@angular/forms';
import {DriverService} from '../../../services/v1/driver.service';
import {Storage} from '@ionic/storage';
import {DomSanitizer} from '@angular/platform-browser';
import {HTTP} from '@ionic-native/http/ngx';
import {ImagePickerService} from '../../../services/utils/image-picker.service';
import {LoadingSpinnerComponent} from '../../../components/loading-spinner/loading-spinner.component';
import {ToastComponent} from '../../../components/toast/toast.component';
import {AlertController, ModalController} from '@ionic/angular';
import {UpdatePasswordComponent} from '../../../components/modals/update-password/update-password.component';
import {ImagePickerOptions} from '@ionic-native/image-picker';
import {environment} from '../../../../environments/environment';
import {ProfileFormPage} from '../profile-form/profile-form.page';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.page.html',
  styleUrls: ['./profile-data.page.scss'],
})
export class ProfileDataPage implements OnInit {
  driver: Driver;
  distance: string;
  duration: string;
  files: any = [];
  filesSrc: any = [];
  filenames: string[] = [];
  authToken: string;
  profileImg: any;
  loading = false;
  V1 = 'v1/app/';

  constructor(private driverService: DriverService,
              private storage: Storage,
              private formBuilder: FormBuilder,
              private domSanitizer: DomSanitizer,
              private http: HTTP,
              private alertController: AlertController,
              private imagePickerService: ImagePickerService,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private toastComponent: ToastComponent,
              private modalController: ModalController) {
    //
  }

  ngOnInit() {
    this.getProfile();
    this.storage.get('auth_token').then(authToken => {
      this.authToken = authToken;
    });
  }

  getProfile() {
    this.loading = true;
    this.driverService.getProfile()
      .subscribe((response: any) => {
        this.driver = response.driver;
        this.driverService.setDriver$(this.driver);
        this.distance = response.distance;
        this.duration = response.duration;
        if (this.driver.has_profile_img) {
          this.getProfileImage();
        }
      }, error => {
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  getProfileImage() {
    this.driverService.getProfileImage()
      .subscribe((blob: any) => {
        const objectURL = URL.createObjectURL(blob);
        this.profileImg = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
      });
  }

  async updateProfile() {
    const modal = await this.modalController.create({
      component: ProfileFormPage,
      componentProps: {driver: this.driver}
    });
    await modal.present();

    modal.onDidDismiss().then(result => {
      if (result?.data?.success) {
        this.getProfile();
      }
    });
  }

  async updatePassword() {
    const modal = await this.modalController.create({
      component: UpdatePasswordComponent,
      cssClass: 'modal-update-password'
    });
    await modal.present();

    modal.onDidDismiss().then(result => {
      if (result && result.data && result.data.success) {
        this.getProfile();
      }
    });
  }

  pickImage() {
    const imagePickerOptions: ImagePickerOptions = {
      maximumImagesCount: 1,
      quality: 70
    };
    this.imagePickerService.pickImages(imagePickerOptions).then(result => {
      this.files = result[0];
      this.filesSrc = result[1];
      this.filenames = result[2];
    }).catch(err => {
      this.toastComponent.presentToast(
        `No se pudo seleccionar la imagen, error: ${err}`, 'middle', 2500);
    });
  }

  uploadFile() {
    this.loadingSpinnerComponent.presentLoadingSpinner('guardando imagen').then(() => {
      const API_URL = environment.API_URL;
      const uri = encodeURI(`${API_URL}${this.V1}drivers/profile/image`);
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + this.authToken,
      };
      this.http.uploadFile(uri, null, headers, this.files[0], 'file')
        .then((data) => {
          this.loadingSpinnerComponent.dismissLoadingSpinner();
          this.filenames = [];
          this.filesSrc = [];
          this.files = [];
          this.getProfile();
        }).catch(err => {
        this.loadingSpinnerComponent.dismissLoadingSpinner();
        this.toastComponent.presentToast(
          `No se pudo guardar la imagen, error: ${JSON.stringify(err)}`, 'middle', 2500);
      });
    });
  }

  onToggleChange(ev) {
    console.log(ev.detail.checked);
    if (ev.detail.checked) {
      this.presentAlertConfirm();
    } else {
      this.updateDriverContractor(false);
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Por favor confirma que trabajas para una empresa de logística',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.updateDriverContractor(true);
          }
        }
      ]
    });

    await alert.present();
  }

  updateDriverContractor(hasContractor) {
    const body = {
      has_contractor: hasContractor
    };
    this.driverService.updateContractor(body)
      .subscribe((response: any) => {

      });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getProfile();
      event.target.complete();
    }, 2000);
  }
}
