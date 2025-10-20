import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '../../../interfaces/Location';
import {OrderService} from '../../../services/v1/order.service';
import {ToastComponent} from '../../../components/toast/toast.component';
import {LoadingSpinnerComponent} from '../../../components/loading-spinner/loading-spinner.component';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {LocationService} from '../../../services/v1/location.service';
import {LocationMapComponent} from '../../../components/modals/location-map/location-map.component';
import {GeocodeService} from '../../../services/v1/geocode.service';

@Component({
  selector: 'app-journey-form',
  templateUrl: './journey-form.page.html',
  styleUrls: ['./journey-form.page.scss'],
})
export class JourneyFormPage implements OnInit {
  loading = false;
  form: FormGroup;
  searching = true;
  locationExists = false;
  searchInputFormControl = new FormControl();
  locations: Location[] = [];
  filteredLocations: Location[] = [];
  location: Location;
  results: any;
  hasNewOrder = false;
  defaultLat = -27.4862341;
  defaultLng = -58.8624276;

  constructor(private formBuilder: FormBuilder,
              private ngZone: NgZone,
              private orderService: OrderService,
              private toastComponent: ToastComponent,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private router: Router,
              private geocodeService: GeocodeService,
              private modalController: ModalController,
              private locationService: LocationService) {
    this.form = this.formBuilder.group({
      location_name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['Buenos Aires', Validators.required],
      notes: [''],
      opening_hours: [''],
      phones: ['']
    });
  }

  ngOnInit(): void {
    // this.orderService.currentOrders.subscribe(updated => {
    //   this.getLocations();
    // });
    this.searchInputFormControl.valueChanges.subscribe(val => {
      this.form.controls.location_name.setValue(val);
      this.form.controls.address.setValue(val);
    });
  }

  getLocations() {
    this.locationService.getLocations()
      .subscribe((response: any) => {
        this.locations = response.locations;
      }, error => {
        //
      }, () => {
        //
      });
  }

  submit() {
    if (!this.locationExists) {
      this.geocodeAddress();
    } else {
      this.storeOrder();
    }
  }

  storeOrder() {
    const body = {
      type: 'journey',
      location_id: this.location.id,
      notes: this.form.value.notes,
      opening_hours: this.form.value.opening_hours,
      phones: this.form.value.phones,
    };
    this.orderService.store(body)
      .subscribe((response: any) => {
          // this.orderService.setUpdatedOrders(true);
          //
          this.router.navigateByUrl('journey-list');
        }, error => {
          //
        },
        () => {
          this.resetForm();
          this.searchInputFormControl.setValue('');
        });
  }

  geocodeAddress() {
    const address = this.form.value.location_name + ', ' +
      this.form.value.address + ', ' +
      this.form.value.city;
    const country = 'Argentina';
    this.geocodeService.mapQuestGeocode(address, country).then((result: any) => {
      this.showLocationMap(result.lat, result.lng);
    }).catch(err => {
      this.geocodeService.GMGeocodeAddress(address, country).then((result: any) => {
        this.showLocationMap(result.lat, result.lng);
      }).catch(error => {
        this.showLocationMap(this.defaultLat, this.defaultLng);
      });
    });
  }

  async showLocationMap(lat: number, lng: number) {
    const modal = await this.modalController.create({
      component: LocationMapComponent,
      cssClass: 'modal-show-location-map',
      componentProps: {
        lat,
        lng
      }
    });
    await modal.present();

    modal.onDidDismiss().then(data => {
      if (data.data && data.data.success) {
        this.handleResults(data.data.lat, data.data.lng);
      }
    });
  }

  handleResults(lat, lng) {
    let locality = '';
    let administrativeAreaLevel1 = '';
    let administrativeAreaLevel2 = '';

    if (this.results.length > 0) {
      this.results[0].address_components.map(addressComponent => {
        addressComponent.types.map(type => {
          if (type === 'locality') {
            locality = addressComponent.long_name;
          } else if (type === 'administrative_area_level_1') {
            administrativeAreaLevel1 = addressComponent.long_name;
          } else if (type === 'administrative_area_level_2') {
            administrativeAreaLevel2 = addressComponent.long_name;
          }
        });
      });
    }

    const body = {
      type: 'journey',
      name: this.form.value.location_name,
      address: this.form.value.address,
      city: this.form.value.city,
      notes: this.form.value.notes,
      opening_hours: this.form.value.opening_hours,
      phones: this.form.value.phones,
      locality,
      administrative_area_level_1: administrativeAreaLevel1,
      administrative_area_level_2: administrativeAreaLevel2,
      lat,
      lng
    };
    this.storeLocation(body);
  }

  storeLocation(body) {
    this.locationService.storeLocation(body)
      .subscribe((response: any) => {
          this.hasNewOrder = true;
          this.router.navigateByUrl('journey-list');
        }, error => {
          const message = error?.error?.custom_message || 'No se pudo registrar la dirección';
          this.toastComponent.presentToast(message, 'middle', 3000);
        },
        () => {
          //
          this.resetForm();
          this.searchInputFormControl.setValue('');
        });
  }

  selectLocation(location: Location) {
    this.locationExists = true;
    this.location = location;
    this.searching = false;
    this.filteredLocations = [];
    this.form.controls.location_name.setValue(location.name);
    this.form.controls.location_name.disable();
    this.form.controls.address.disable();
    this.form.controls.address.setValue(location.address);
    this.form.controls.address.disable();
    this.form.controls.city.setValue(location.city);
    this.form.controls.city.disable();

    this.form.controls.notes.setValue(location.notes);
    this.form.controls.opening_hours.setValue(location.opening_hours);
    this.form.controls.phones.setValue(location.phones);
  }

  search(event) {
    this.searching = true;
    this.locationExists = false;
    this.resetForm();
    const keyword = event.detail.value.toLowerCase();
    if (keyword === '') {
      this.filteredLocations = [];
    } else {
      this.filteredLocations = this.locations.filter(location =>
        location.name.toLowerCase().includes(keyword)
        || location.full_address.toLowerCase().includes(keyword));
    }
    if (this.filteredLocations.length <= 0) {
      this.searching = false;
    }
  }

  clear() {
    this.searching = false;
    this.filteredLocations = [];
  }

  resetForm() {
    this.form.controls.location_name.setValue(this.searchInputFormControl.value);
    this.form.controls.address.setValue('');
    this.form.controls.city.setValue('Corrientes');
    this.form.controls.notes.setValue('');
    this.form.controls.opening_hours.setValue('');
    this.form.controls.phones.setValue('');

    this.form.controls.location_name.enable();
    this.form.controls.address.enable();
    this.form.controls.city.enable();
    this.form.controls.notes.enable();
    this.form.controls.opening_hours.enable();
    this.form.controls.phones.enable();
  }

  dismiss() {
    this.modalController.dismiss({hasNewOrder: this.hasNewOrder});
  }

}
