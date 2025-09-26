import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Order} from '../../../interfaces/Order';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../../services/v1/order.service';
import {OrderManagerService} from '../../../services/v1/order-manager.service';

@Component({
  selector: 'app-edit-urban-distribution',
  templateUrl: './edit-urban-distribution.component.html',
  styleUrls: ['./edit-urban-distribution.component.scss'],
})
export class EditUrbanDistributionComponent implements OnInit {
  @Input() order: Order;
  form: FormGroup;
  submitting = false;

  constructor(private modalController: ModalController,
              private orderService: OrderService,
              private orderManagerService: OrderManagerService,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      company_name: ['', Validators.required],
      details: [''],
      city: [''],
      address: [''],
      phone: [''],
      b: [''],
      v: [''],
      s: [''],
      m: [''],
      c: [''],
    });
  }

  ngOnInit() {
    this.form.controls.company_name.setValue(this.order.receiver);
    this.form.controls.details.setValue(this.order.description);
    this.form.controls.phone.setValue(this.order.phone);
    this.form.controls.city.setValue(this.order.location.city);
    this.form.controls.address.setValue(this.order.location.address);
    this.form.controls.b.setValue(this.order.location.b);
    this.form.controls.v.setValue(this.order.location.v);
    this.form.controls.s.setValue(this.order.location.s);
    this.form.controls.m.setValue(this.order.location.m);
    this.form.controls.c.setValue(this.order.location.c);
    console.log(this.order);
  }

  submit() {
    this.submitting = true;
    const body = {
      receiver: this.form.value.company_name,
      description: this.form.value.details,
      phone: this.form.value.phone,
      city: this.form.value.city,
      address: this.form.value.address,
      b: this.form.value.b,
      v: this.form.value.v,
      s: this.form.value.s,
      m: this.form.value.m,
      c: this.form.value.c,
    };
    this.orderManagerService.updateOrder(this.order, body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.dismiss(true);
        this.modalController.dismiss({success: true});
      }, error => {
        this.submitting = false;
      });
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }
}
