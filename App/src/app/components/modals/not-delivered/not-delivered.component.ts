import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Order} from '../../../interfaces/Order';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../../../services/v1/order.service';
import {OrderManagerService} from '../../../services/v1/order-manager.service';
import {GeolocationService} from '../../../services/v1/geolocation.service';
import {Geoposition} from '@ionic-native/geolocation';

@Component({
  selector: 'app-not-delivered',
  templateUrl: './not-delivered.component.html',
  styleUrls: ['./not-delivered.component.scss'],
})
export class NotDeliveredComponent implements OnInit {
  @Input() order: Order;
  optionFC = new FormControl();
  showTextarea = false;
  showLocationFields = false;
  textareaFC = new FormControl();
  submitting = false;
  form: FormGroup;
  saveClientFC = new FormControl();
  driverPosition: Geoposition;

  constructor(private modalController: ModalController,
              private orderManagerService: OrderManagerService,
              private formBuilder: FormBuilder,
              private geolocationService: GeolocationService,
              private orderService: OrderService) {
    this.form = this.formBuilder.group({
      locationName: [''],
      locationAddress: [''],
      b: [''],
      v: [''],
      s: [''],
      m: [''],
      c: [''],
    });
  }

  ngOnInit() {
    this.checkWatchLocationsSubscription();

    this.form.controls.locationName.setValue(this.order.location.name);
    this.form.controls.locationAddress.setValue(this.order.location.address);
    this.form.controls.b.setValue(this.order.location.b);
    this.form.controls.v.setValue(this.order.location.v);
    this.form.controls.s.setValue(this.order.location.s);
    this.form.controls.m.setValue(this.order.location.m);
    this.form.controls.c.setValue(this.order.location.c);
  }

  checkWatchLocationsSubscription() {
    if (!this.geolocationService.checkWatchLocationsSubscription()) {
      this.geolocationService.watchPosition();
    }
  }

  submit() {
    this.submitting = true;
    this.driverPosition = this.geolocationService.getDriverPosition();
    const body = {
      not_delivered_motive: this.optionFC.value,
      not_delivered_description: this.textareaFC.value,
      location_name: this.form.value.locationName,
      location_address: this.form.value.locationAddress,
      b: this.form.value.b,
      v: this.form.value.v,
      s: this.form.value.s,
      m: this.form.value.m,
      c: this.form.value.c,
      save_client: this.saveClientFC.value,
      lat: this.driverPosition.coords.latitude,
      lng: this.driverPosition.coords.longitude
    };
    this.orderManagerService.setNotDeliveredOrder(this.order, body)
      .subscribe((response: any) => {
        console.log(response);
        this.submitting = false;
        this.dismiss(true);
      }, error => {
        this.submitting = false;
      });
  }

  onOptionChange(ev) {
    if (ev.detail.value === 'otros') {
      this.showTextarea = true;
      this.showLocationFields = false;
    } else if (ev.detail.value === 'nueva dirección') {
      this.showTextarea = false;
      this.showLocationFields = true;
    }
  }

  dismiss(success) {
    if (success) {
      this.order.status = 'not-delivered';
      this.order.status_es = 'no entregada';
      this.orderService.setOrdersUpdated$(true);
    }
    this.modalController.dismiss({success});
  }
}
