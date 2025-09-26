import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Order} from '../../../interfaces/Order';

@Component({
  selector: 'app-modal-edit-address',
  templateUrl: './modal-edit-address.component.html',
  styleUrls: ['./modal-edit-address.component.scss'],
})
export class ModalEditAddressComponent implements OnInit {
  @Input() order: Order;
  form: FormGroup;

  constructor(private modalController: ModalController,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      address: ['', Validators.required],
      b: [''],
      s: [''],
      m: [''],
      c: ['']
    });
  }

  ngOnInit() {
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

}
