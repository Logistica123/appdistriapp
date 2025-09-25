import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DriverService } from '../../../services/driver.service';
import { Driver } from '../../../models/Driver';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');
import localeEs from '@angular/common/locales/es';
import { FormControl } from '@angular/forms';
import { DriverLocation } from '../../../models/DriverLocation';
import { DriverGeopositionService } from '../../../services/driver-geoposition.service';

declare var google;

@Component({
  selector: 'app-driver-location',
  templateUrl: './driver-location.component.html',
  styleUrls: ['./driver-location.component.css']
})
export class DriverLocationComponent implements OnInit {
  map: any;
  heatmap: any;
  @ViewChild('driverLocationMap') mapElement: ElementRef;
  drivers: Driver[] = [];
  driverLocations: DriverLocation[] = [];
  markers: any[] = [];
  lastLocationMarker: any;
  dateFC = new FormControl();
  driverFC = new FormControl();
  points = [];
  noLocationsMessage = false;
  loading = true;
  selectedDriver: Driver;

  constructor(private driverService: DriverService,
              private driverGeoposition: DriverGeopositionService) {
    const parsedDate = new Date();
    parsedDate.setMinutes(parsedDate.getMinutes() + parsedDate.getTimezoneOffset());
    this.dateFC.setValue(new Date(parsedDate));
  }

  ngOnInit() {
    // this.getDrivers();
    this.getDriversWithLastGeoposition();
    this.driverFC.valueChanges.subscribe(driver => {
      if (driver) {
        this.selectedDriver = driver;
        this.setDriverMarker();
        // this.getDriverLocationsByDate(this.selectedDriver);
      }
    });
  }

  getDriversWithLastGeoposition() {
    this.driverGeoposition.getDriversWithLastGeoposition()
      .subscribe((response: any) => {
        this.drivers = response.drivers;
        setTimeout(() => {
          this.initMap();
        }, 1500);
        // setTimeout(() => {
        //   this.driverFC.setValue(this.drivers[0]);
        // }, 250);
      });
  }

  filterByDate() {
    const date = new Date(this.dateFC.value).toISOString();
    if (this.selectedDriver) {
      this.getDriverLocationsByDate(this.selectedDriver);
    }
  }

  getDrivers() {
    this.driverService.getDrivers()
      .subscribe((response: any) => {
        this.drivers = response.drivers;
        setTimeout(() => {
          this.driverFC.setValue(this.drivers[0]);
        }, 250);
      });
  }

  getDriverLocationsByDate(driver) {
    this.loading = true;
    this.points = [];
    const date = new Date(this.dateFC.value).toISOString();
    this.noLocationsMessage = false;
    this.driverService.getDriverLocationsByDate(driver, date)
      .subscribe((response: any) => {
        console.log(response);
        this.driverLocations = response.driver_locations;
        if (this.driverLocations.length <= 0) {
          this.noLocationsMessage = true;
          if (this.map) {
            this.map = null;
            this.lastLocationMarker.setMap(null);
            this.heatmap.setMap(null);
          }
        } else {
          this.driverLocations.map(location => {
            const lat = location.lat;
            const lng = location.lng;
            this.points.push(new google.maps.LatLng(lat, lng));
          });
          this.initMap();
        }
        this.loading = false;
      });
  }

  getDriversLastLocation() {
    this.driverService.getDriversLastLocation()
      .subscribe((response: any) => {
        this.drivers = response.drivers;
        console.log(this.drivers);
        this.drivers.map(driver => {
          const lat = driver.last_driver_location.lat;
          const lng = driver.last_driver_location.lng;
          const marker = new google.maps.Marker({
            id: driver.id,
            position: new google.maps.LatLng(lat, lng),
            label: driver.full_name
          });
          this.markers.push(marker);
        });
        this.initMap();
      });
  }

  initMap() {
    console.log('initing map...');
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 9,
      // center: this.points[0],
      center: new google.maps.LatLng(-27.571119, -58.703177),
    });
    this.addMarkers();

    // const gradient = [
    //   'rgba(0, 255, 255, 0)',
    //   'rgba(0, 255, 255, 1)',
    //   'rgba(0, 191, 255, 1)',
    //   'rgba(0, 127, 255, 1)',
    //   'rgba(0, 63, 255, 1)',
    //   'rgba(0, 0, 255, 1)',
    //   'rgba(0, 0, 223, 1)',
    //   'rgba(0, 0, 191, 1)',
    //   'rgba(0, 0, 159, 1)',
    //   'rgba(0, 0, 127, 1)',
    //   'rgba(63, 0, 91, 1)',
    //   'rgba(127, 0, 63, 1)',
    //   'rgba(191, 0, 31, 1)',
    //   'rgba(255, 0, 0, 1)'
    // ];
    //
    // this.heatmap = new google.maps.visualization.HeatmapLayer({
    //   data: this.points,
    //   map: this.map
    // });
    // this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
    // this.heatmap.set('opacity', this.heatmap.get('opacity') ? null : 1);
    // this.heatmap.set('radius', this.heatmap.get('radius') ? null : 15);

    // if (this.points.length > 0) {
    //   const markerLat = this.driverLocations[0].lat;
    //   const markerLng = this.driverLocations[0].lng;
    //   const lastLocationDate = this.driverLocations[0].date;
    //   this.lastLocationMarker = new google.maps.Marker({
    //     position: new google.maps.LatLng(markerLat, markerLng),
    //     map: this.map
    //   });
    //
    //   const infoWindow = new google.maps.InfoWindow({
    //     content: `Última ubicación registrada para la fecha seleccionada (${lastLocationDate})`
    //   });
    //   infoWindow.open(this.map, this.lastLocationMarker);
    // }
  }

  addMarkers() {
    this.deleteAllMarkers();
    this.drivers.map(driver => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(+driver.last_driver_geoposition.lat, +driver.last_driver_geoposition.lng),
        map: this.map
      });
      const infoWindow = new google.maps.InfoWindow({
        content: `${driver.full_name} (${driver.last_driver_geoposition.date})`
      });
      infoWindow.open(this.map, marker);
      this.markers.push(marker);
    });

    // this.markers.map(marker => {
    //   marker.setMap(this.map);
    // });
  }

  setDriverMarker() {
    this.deleteAllMarkers();

    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(+this.selectedDriver.last_driver_geoposition.lat, +this.selectedDriver.last_driver_geoposition.lng),
      map: this.map
    });
    const infoWindow = new google.maps.InfoWindow({
      content: `${this.selectedDriver.full_name} (${this.selectedDriver.last_driver_geoposition.date})`
    });
    infoWindow.open(this.map, marker);
    this.markers.push(marker);
  }

  deleteAllMarkers() {
    this.markers.map(m => {
      m.setMap(null);
    });
  }


}
