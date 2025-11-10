import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Driver} from '../../../interfaces/Driver';
import {FormBuilder} from '@angular/forms';
import {DriverService} from '../../../services/v1/driver.service';
import {Storage} from '@ionic/storage';
import {DomSanitizer} from '@angular/platform-browser';
import {HTTP} from '@ionic-native/http/ngx';
import {ImagePickerService} from '../../../services/utils/image-picker.service';
import {LoadingSpinnerComponent} from '../../../components/loading-spinner/loading-spinner.component';
import {ToastComponent} from '../../../components/toast/toast.component';
import {AlertController, ModalController, Platform} from '@ionic/angular';
import {UpdatePasswordComponent} from '../../../components/modals/update-password/update-password.component';
import {ImagePickerOptions} from '@ionic-native/image-picker';
import {environment} from '../../../../environments/environment';
import {ProfileFormPage} from '../profile-form/profile-form.page';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.page.html',
  styleUrls: ['./profile-data.page.scss'],
})
export class ProfileDataPage implements OnInit {
  driver: Driver;
  distance: string;
  duration: string;
  files: any[] = [];
  filesSrc: string[] = [];
  filenames: string[] = [];
  authToken: string;
  profileImg: any;
  loading = false;
  V1 = 'v1/app/';
  @ViewChild('fileInput') fileInputRef: ElementRef<HTMLInputElement>;
  private readonly isHybridPlatform: boolean;

  constructor(private driverService: DriverService,
              private storage: Storage,
              private formBuilder: FormBuilder,
              private domSanitizer: DomSanitizer,
              private http: HTTP,
              private alertController: AlertController,
              private imagePickerService: ImagePickerService,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private toastComponent: ToastComponent,
              private modalController: ModalController,
              private platform: Platform) {
    this.isHybridPlatform = this.platform.is('hybrid') || this.platform.is('cordova');
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
      componentProps: {driver: this.driver},
      cssClass: 'profile-form-modal'
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
    if (this.isHybridPlatform) {
      const imagePickerOptions: ImagePickerOptions = {
        maximumImagesCount: 1,
        quality: 70
      };
      this.imagePickerService.pickImages(imagePickerOptions).then(result => {
        this.files = result[0];
        this.filesSrc = result[1] as string[];
        this.filenames = result[2];
      }).catch(err => {
        this.toastComponent.presentToast(
          `No se pudo seleccionar la imagen, error: ${err}`, 'middle', 2500);
      });
      return;
    }

    const fileInput = this.fileInputRef?.nativeElement;
    if (!fileInput) {
      this.toastComponent.presentToast(
        'No se pudo abrir el selector de archivos.', 'middle', 2500);
      return;
    }
    fileInput.value = '';
    fileInput.click();
  }

  canDeletePhoto(): boolean {
    return this.filesSrc.length > 0 || !!this.driver?.has_profile_img;
  }

  async handleDeletePhoto() {
    if (this.filesSrc.length > 0 && !this.driver?.has_profile_img) {
      this.resetFileSelection();
      return;
    }

    if (this.filesSrc.length > 0) {
      this.resetFileSelection();
    }

    if (!this.driver?.has_profile_img) {
      return;
    }

    const alert = await this.alertController.create({
      header: 'Eliminar foto',
      message: '¿Querés eliminar tu foto de perfil?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          cssClass: 'danger',
          handler: () => {
            this.deleteProfilePhoto();
          }
        }
      ]
    });

    await alert.present();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input?.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
      this.toastComponent.presentToast(
        'Seleccioná un archivo de imagen válido.', 'middle', 2500);
      this.resetFileSelection();
      return;
    }

    const reader = new FileReader();
    this.files = [file];
    this.filenames = [file.name];
    reader.onload = () => {
      this.filesSrc = [reader.result as string];
    };
    reader.onerror = () => {
      this.toastComponent.presentToast(
        'No se pudo leer la imagen seleccionada.', 'middle', 2500);
      this.resetFileSelection();
    };
    reader.readAsDataURL(file);
  }

  async uploadFile() {
    if (!this.files.length) {
      return;
    }

    await this.loadingSpinnerComponent.presentLoadingSpinner('guardando imagen');

    if (this.isHybridPlatform) {
      const API_URL = environment.API_URL;
      const uri = encodeURI(`${API_URL}${this.V1}drivers/profile/image`);
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + this.authToken,
      };
      try {
        await this.http.uploadFile(uri, null, headers, this.files[0], 'file');
        this.resetFileSelection();
        this.getProfile();
      } catch (err) {
        this.toastComponent.presentToast(
          `No se pudo guardar la imagen, error: ${JSON.stringify(err)}`, 'middle', 2500);
      } finally {
        await this.loadingSpinnerComponent.dismissLoadingSpinner();
      }
      return;
    }

    const file = this.files[0] as File;
    try {
      await this.uploadProfileImageFromWeb(file);
      this.resetFileSelection();
      this.getProfile();
    } catch (err) {
      const errorMessage = this.formatUploadError(err);
      this.toastComponent.presentToast(
        `No se pudo guardar la imagen, error: ${errorMessage}`, 'middle', 2500);
    } finally {
      await this.loadingSpinnerComponent.dismissLoadingSpinner();
    }
  }

  private async deleteProfilePhoto() {
    await this.loadingSpinnerComponent.presentLoadingSpinner('eliminando imagen');
    this.driverService.deleteProfileImage()
      .pipe(take(1))
      .subscribe({
        next: async () => {
          this.profileImg = null;
          if (this.driver) {
            this.driver.has_profile_img = false;
          }
          this.resetFileSelection();
          this.getProfile();
          await this.loadingSpinnerComponent.dismissLoadingSpinner();
          this.toastComponent.presentToast('Imagen de perfil eliminada.', 'middle', 2000);
        },
        error: async (err) => {
          await this.loadingSpinnerComponent.dismissLoadingSpinner();
          const errorMessage = this.formatUploadError(err);
          this.toastComponent.presentToast(
            `No se pudo eliminar la imagen, error: ${errorMessage}`, 'middle', 2500);
        }
      });
  }

  private resetFileSelection() {
    this.filenames = [];
    this.filesSrc = [];
    this.files = [];
    if (this.fileInputRef?.nativeElement) {
      this.fileInputRef.nativeElement.value = '';
    }
  }

  private uploadProfileImageFromWeb(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      this.driverService.uploadProfileImage(file)
        .pipe(take(1))
        .subscribe({
          next: resolve,
          error: reject
        });
    });
  }

  private formatUploadError(error: any): string {
    if (!error) {
      return 'desconocido';
    }

    if (typeof error === 'string') {
      return error;
    }

    const nestedMessage = error?.error?.message || error?.message;
    if (nestedMessage) {
      return nestedMessage;
    }

    if (error?.error && typeof error.error === 'object') {
      const errorValue = Object.values(error.error)[0];
      if (typeof errorValue === 'string') {
        return errorValue;
      }
      if (Array.isArray(errorValue) && errorValue.length > 0) {
        return String(errorValue[0]);
      }
    }

    try {
      return JSON.stringify(error);
    } catch {
      return 'desconocido';
    }
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
