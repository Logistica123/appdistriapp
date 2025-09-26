import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocationService} from '../../../services/v1/location.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
})
export class LocationFormComponent implements OnInit {
  locationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public modalController: ModalController,
              private locationService: LocationService) {
    this.locationForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addLocation() {
    const body = this.setBody();
    this.locationService.storeLocation(body)
      .subscribe((response: any) => {
        this.modalController.dismiss({success: true});
      });
  }

  setBody() {
    return {
      name: this.locationForm.value.name,
      address: this.locationForm.value.address
    };
  }
}
