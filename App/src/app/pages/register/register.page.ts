import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DriverService} from "../../services/v2/driver.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  form: FormGroup;
  confirmedPassword = true;
  private cuilSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private driverService: DriverService,
              private toastController: ToastController) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      cuil: ['', [Validators.required, Validators.pattern('^\\d{11}$')]],
      phone_number: [''],
      license_plate: [''],
      city: [''],
      car_make: [''],
      car_model: [''],
      car_year: [''],
      company: [''],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });

    this.subscribeToCuilChanges();
    this.resetForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.resetForm();
  }

  ngOnDestroy() {
    if (this.cuilSubscription) {
      this.cuilSubscription.unsubscribe();
    }
  }

  submit() {
    if (this.confirmedPassword && this.form.valid) {
      const body = this.setBody();
      this.driverService.register(body)
        .subscribe((response: any) => {
          this.resetForm();
          this.router.navigateByUrl('login');
        }, async error => {
          await this.presentToast(error?.error?.message || 'No se pudo registrar el conductor', 'danger');
        });
    }
  }

  validatePassword() {
    this.confirmedPassword = this.form.value.password === this.form.value.password_confirmation;
  }

  setBody() {
    return {
      name: this.form.value.name,
      last_name: this.form.value.last_name,
      email: this.form.value.email,
      cuil: this.form.value.cuil,
      phone_number: this.form.value.phone_number,
      city: this.form.value.city,
      car_make: this.form.value.car_make,
      car_model: this.form.value.car_model,
      car_year: this.form.value.car_year,
      license_plate: this.form.value.license_plate,
      company: this.form.value.company,
      password: this.form.value.password,
      password_confirmation: this.form.value.password_confirmation,
    };
  }

  private subscribeToCuilChanges() {
    this.cuilSubscription = this.form.get('cuil')?.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((cuil: string) => {
        if (cuil && cuil.length === 11) {
          this.lookupByCuil(cuil);
        } else {
          this.clearPersonalData();
        }
      });
  }

  private lookupByCuil(cuil: string) {
    this.driverService.lookupByCuil(cuil).subscribe(async (response: any) => {
      if (response?.person) {
        this.form.patchValue({
          name: response.person.name || '',
          last_name: response.person.last_name || '',
          email: response.person.email || '',
          phone_number: response.person.phone_number || '',
          license_plate: response.person.license_plate || '',
          company: response.person.company || ''
        }, {emitEvent: false});
      }
    }, async error => {
      this.clearPersonalData();
      if (error.status === 404) {
        await this.presentToast('CUIL no encontrado en Personal', 'warning');
      } else if (error.status === 422) {
        await this.presentToast('Formato de CUIL inválido', 'warning');
      } else {
        await this.presentToast('No se pudo consultar la base de Personal', 'danger');
      }
    });
  }

  private clearPersonalData() {
    this.form.patchValue({
      name: '',
      last_name: '',
      email: '',
      phone_number: '',
      license_plate: '',
      city: '',
      car_make: '',
      car_model: '',
      car_year: '',
      company: ''
    }, {emitEvent: false});
  }

  private resetForm() {
    this.form.reset({
      name: '',
      last_name: '',
      email: '',
      cuil: '',
      phone_number: '',
      license_plate: '',
      city: '',
      car_make: '',
      car_model: '',
      car_year: '',
      company: '',
      password: '',
      password_confirmation: ''
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  private async presentToast(message: string, color: 'warning' | 'danger' = 'warning') {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      color,
      position: 'top'
    });
    await toast.present();
  }
}
