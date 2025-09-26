import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LocationService } from '../../../services/location.service';
import { Location } from '../../../models/Location';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  location: Location;
  map: any;
  @ViewChild('locationDetailMap') mapElement: ElementRef;
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<LocationFormComponent>,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private locationService: LocationService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
    });

    if (data) {
      this.location = data.location;
      this.setLocation();
    }
  }

  ngOnInit() {
  }

  submit() {
    const body = this.setBody();
    this.locationService.updateLocation(this.location, body)
      .subscribe((response: any) => {
        this.dialogRef.close({success: true});
      });
  }

  setLocation() {
    this.form.controls.name.setValue(this.location.name);
    this.form.controls.address.setValue(this.location.address);
    this.form.controls.city.setValue(this.location.city);
  }

  public close(): void {
    this.dialogRef.close({success: false});
  }

  setBody() {
    return {
      name: this.form.value.name,
      address: this.form.value.address,
      city: this.form.value.city
    };
  }
}
