import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Location } from '../../../models/Location';
import { ActionConfirmComponent } from '../../../shared/action-confirm/action-confirm.component';
import { LocationService } from '../../../services/location.service';
import { subscribeOn } from 'rxjs/operators';

declare var google;

@Component({
  selector: 'app-location-update-request',
  templateUrl: './location-update-request.component.html',
  styleUrls: ['./location-update-request.component.css']
})
export class LocationUpdateRequestComponent implements OnInit, AfterViewInit {
  location: Location;
  map: any;
  @ViewChild('locationUpdateRequestMap') mapElement: ElementRef;

  constructor(public dialogRef: MatDialogRef<LocationUpdateRequestComponent>,
              private dialog: MatDialog,
              private locationService: LocationService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.location = data.location;
      console.log(this.location);
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
      zoom: 7,
      center: new google.maps.LatLng(+this.location.lat, +this.location.lng),
    });
    this.addMarker();
    this.addRequestMarkers();
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

  addRequestMarkers() {
    this.location.update_requests.map(updateRequest => {
      console.log(updateRequest);
      const marker = new google.maps.Marker({
        label: updateRequest.full_name,
        position: {lat: +updateRequest.pivot.lat, lng: +updateRequest.pivot.lng},
        map: this.map,
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
      });

      marker.addListener('click', event => {
        const self = this;
        self.updateLocationCoords(event.latLng.lat(), event.latLng.lng());
      });
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
