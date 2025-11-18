import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/v1/auth.service';
import {DriverService} from '../../services/v1/driver.service';
import {DeviceService} from '../../services/v1/device.service';
import {Driver} from '../../interfaces/Driver';
import {GeolocationService} from '../../services/v1/geolocation.service';
import {Router} from '@angular/router';
import {LocationAccuracy} from '@ionic-native/location-accuracy/ngx';
import {AlertController, Platform} from '@ionic/angular';
import {LocationService} from '../../services/v1/location.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInForm: FormGroup;
  loading = false;
  checkingCredentials = true;
  showPassword = false;

  constructor(private storage: Storage,
              private formBuilder: FormBuilder,
              private driverService: DriverService,
              private deviceService: DeviceService,
              private locationAccuracy: LocationAccuracy,
              private geolocationService: GeolocationService,
              private router: Router,
              private locationService: LocationService,
              private platform: Platform,
              private alertController: AlertController,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private authService: AuthService) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      checkbox: [false]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
    this.checkingCredentials = true;
    Promise.all([
      this.storage.get('remember'),
      this.storage.get('auth_token')
    ]).then(values => {
      const remember = values[0];
      const authToken = values[1];
      console.log(this.platform.is('mobileweb'));
      if (remember && authToken) {
        this.handleLocationFlow();
      } else {
        this.checkingCredentials = false;
      }
    });
  }

  signIn() {
    const credentials = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    };
    this.signInForm.value.checkbox
      ? this.storage.set('remember', true)
      : this.storage.set('remember', false);
    this.authService.signIn(credentials)
      .subscribe((response: any) => {
        const driver: Driver = response.driver;
        this.setProfile(driver);
        this.locationService.setLocations$(response.locations);
        Promise.all([
          this.storage.set('senderId', response.email),
          this.storage.set('adminEmail', response.admin_email),
          this.storage.set('auth_token', response.auth_token)
        ]).then(() => {

          this.deviceService.storeDevice();
          this.handleLocationFlow();
        });
      }, error => {
        this.loading = false;
      });
  }

  register() {
    this.router.navigateByUrl('register');
  }

  requestLocationAccuracy() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
        .then(() => {
            this.watchPosition();
            this.navigate();
          },
          error => {
            console.log(error);
            this.presentAlert();
          }
        );
    }).catch(err => {
      console.log(err);
    });
  }

  setProfile(driver: Driver) {
    this.driverService.setDriver$(driver);
  }

  watchPosition() {
    this.geolocationService.watchPosition();
  }

  navigate() {
    // this.router.navigateByUrl('urban-distribution-list');
    this.router.navigateByUrl('profile/profile-data');
  }

  private handleLocationFlow() {
    if (this.platform.is('mobileweb')) {
      this.watchPosition();
      this.navigate();
    } else {
      this.requestLocationAccuracy();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'No se pudo obtener ubicación actual. ' +
        'Por favor concede los permisos para que la aplicación pueda utilizar el GPS de su dispositivo móvil',
      buttons: ['OK']
    });

    await alert.present();
  }

  async createFirebaseUser() {
    console.log('creating firebase user');
    const credentials = await this.afAuth.createUserWithEmailAndPassword(
      this.signInForm.value.email,
      this.signInForm.value.email);
    console.log('result', credentials);
    const uid = credentials.user.uid;
    console.log(uid);
  }
}
