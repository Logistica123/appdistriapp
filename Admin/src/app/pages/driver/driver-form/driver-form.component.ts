import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../../../services/driver.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Driver } from '../../../models/Driver';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  driverForm: FormGroup;
  driver: Driver;
  buttonText = 'Aceptar';
  edit = false;
  bankStatusLabel = '';
  bankStatusColor = 'primary';

  constructor(private formBuilder: FormBuilder,
              private driverService: DriverService,
              private afAuth: AngularFireAuth,
              public dialogRef: MatDialogRef<DriverFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.driverForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      bankCbu: [''],
      bankOwnerIsDriver: [true],
      bankHolderName: [''],
      bankHolderDocument: [''],
      bankHolderPhone: [''],
      bankHolderEmail: [''],
      confirmBankChange: [false],
      carMake: ['', Validators.required],
      carModel: ['', Validators.required],
      carYear: ['', Validators.required],
      licensePlate: ['', Validators.required],
      startAddress: [''],
      startLat: [''],
      startLng: [''],
    });

    if (data) {
      this.edit = true;
      this.buttonText = 'Editar';
      this.driver = data.driver;
      this.setDriverForm(data.driver);
    }
  }

  ngOnInit() {
    this.setBankStatusInfo();
  }

  submit() {
    if (!this.edit) {
      this.storeDriver();
    } else {
      this.updateDriver();
    }
  }

  storeDriver() {
    const body = this.setBody();
    this.driverService.storeDriver(body)
      .subscribe((response: any) => {
        const storedDriver: Driver = response.driver;
        this.registerDriverInFirebase(storedDriver);
      }, error => {

      }, () => {

      });
  }

  registerDriverInFirebase(driver: Driver) {
    this.afAuth.createUserWithEmailAndPassword(driver.email, driver.email).then(user => {
      const body = {
        firebase_uid: user.user.uid
      };
      this.driverService.updateDriverFirebaseUID(driver, body)
        .subscribe((response: any) => {
          this.dialogRef.close({success: true});
        });
    });
  }

  updateDriver() {
    const body = this.setBody();
    this.driverService.updateDriver(this.driver, body)
      .subscribe((response: any) => {
        this.dialogRef.close({success: true});
      }, error => {

      }, () => {

      });
  }

  setDriverForm(data) {
    this.driverForm.controls.email.disable();
    this.driverForm.controls.name.setValue(data.name);
    this.driverForm.controls.lastName.setValue(data.last_name);
    this.driverForm.controls.email.setValue(data.email);
    this.driverForm.controls.phoneNumber.setValue(data.phone_number);
    this.driverForm.controls.carMake.setValue(data.car_make);
    this.driverForm.controls.carModel.setValue(data.car_model);
    this.driverForm.controls.carYear.setValue(data.car_year);
    this.driverForm.controls.licensePlate.setValue(data.license_plate);
    this.driverForm.controls.startAddress.setValue(data.start_address);
    this.driverForm.controls.startLat.setValue(data.start_lat);
    this.driverForm.controls.startLng.setValue(data.start_lng);
    this.driverForm.controls.bankCbu.setValue(data.bank_cbu);
    this.driverForm.controls.bankOwnerIsDriver.setValue(data.bank_owner_is_driver !== undefined ? data.bank_owner_is_driver : true);
    this.driverForm.controls.bankHolderName.setValue(data.bank_holder_name || '');
    this.driverForm.controls.bankHolderDocument.setValue(data.bank_holder_document || '');
    this.driverForm.controls.bankHolderPhone.setValue(data.bank_holder_phone || '');
    this.driverForm.controls.bankHolderEmail.setValue(data.bank_holder_email || '');
    this.setBankStatusInfo();
  }

  setBankStatusInfo() {
    if (!this.driver) {
      return;
    }
    const status = this.driver.bank_cbu_status || 'confirmed_owner';
    this.bankStatusLabel = status === 'pending_owner_confirm'
      ? 'CBU en revisión'
      : status === 'rejected'
        ? 'CBU rechazado'
        : 'CBU confirmado';
    if (status === 'pending_owner_confirm') {
      this.bankStatusColor = 'warn';
    } else if (status === 'rejected') {
      this.bankStatusColor = 'accent';
    } else {
      this.bankStatusColor = 'primary';
    }
  }

  setBody() {
    const bankCbu = this.driverForm.value.bankCbu ? this.driverForm.value.bankCbu.replace(/\s+/g, '') : null;
    return {
      name: this.driverForm.value.name,
      last_name: this.driverForm.value.lastName,
      email: this.driverForm.value.email,
      phone_number: this.driverForm.value.phoneNumber,
      bank_cbu: bankCbu,
      bank_owner_is_driver: this.driverForm.value.bankOwnerIsDriver,
      bank_holder_name: this.driverForm.value.bankOwnerIsDriver ? null : (this.driverForm.value.bankHolderName ? this.driverForm.value.bankHolderName.trim() : null),
      bank_holder_document: this.driverForm.value.bankOwnerIsDriver ? null : (this.driverForm.value.bankHolderDocument ? this.driverForm.value.bankHolderDocument.trim() : null),
      bank_holder_phone: this.driverForm.value.bankOwnerIsDriver ? null : (this.driverForm.value.bankHolderPhone ? this.driverForm.value.bankHolderPhone.trim() : null),
      bank_holder_email: this.driverForm.value.bankOwnerIsDriver ? null : (this.driverForm.value.bankHolderEmail ? this.driverForm.value.bankHolderEmail.trim() : null),
      confirm_bank_change: this.driverForm.value.confirmBankChange || false,
      car_make: this.driverForm.value.carMake,
      car_model: this.driverForm.value.carModel,
      car_year: this.driverForm.value.carYear,
      license_plate: this.driverForm.value.licensePlate,
      start_address: this.driverForm.value.startAddress,
      start_lat: this.driverForm.value.startLat,
      start_lng: this.driverForm.value.startLng,
    };
  }

  public close(success): void {
    this.dialogRef.close({success});
  }
}
