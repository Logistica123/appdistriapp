import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LocationService } from '../../../services/location.service';
import { Location } from '../../../models/Location';
import { ActionConfirmComponent } from '../../../shared/action-confirm/action-confirm.component';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var google;

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit, AfterViewInit {
  location: Location;
  map: any;
  @ViewChild('locationDetailMap') mapElement: ElementRef;

  constructor(public dialogRef: MatDialogRef<LocationDetailComponent>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private locationService: LocationService) {
    if (data) {
      this.location = data.location;
    }
  }

  ngOnInit() {
    //
  }

  ngAfterViewInit(): void {
    if (this.location) {
      this.initMap();
    }
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: new google.maps.LatLng(+this.location.lat, +this.location.lng),
    });
    this.addMarker();
  }

  addMarker() {
    const marker = new google.maps.Marker();
    marker.setPosition({
      lat: +this.location.lat,
      lng: +this.location.lng
    });
    marker.setMap(this.map);
    marker.setLabel(this.location.name);
    marker.setDraggable(true);
    marker.addListener('dragend', event => {
      const self = this;
      self.updateLocationCoords(event.latLng.lat(), event.latLng.lng());
    });
  }

  updateLocationCoords(lat, lng) {
    const dialogRef = this.dialog.open(ActionConfirmComponent, {
      data: {
        message: `¿Desea cambiar la ubicación de ${this.location.name}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        const body = {
          lat,
          lng
        };
        this.locationService.updateLocationCoords(this.location, body)
          .subscribe((response: any) => {
            this.dialogRef.close({success: true});
          });
      }
    });
  }

  public close(): void {
    this.dialogRef.close({success: false});
  }
}
