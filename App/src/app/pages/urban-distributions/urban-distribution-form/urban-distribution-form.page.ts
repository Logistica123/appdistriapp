import {Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '../../../interfaces/Location';
import {LocationService} from '../../../services/v1/location.service';
import {IonSlides, ModalController, PopoverController} from '@ionic/angular';
import {LocationMapComponent} from '../../../components/modals/location-map/location-map.component';
import {LoadingSpinnerComponent} from '../../../components/loading-spinner/loading-spinner.component';
import {OrderService} from '../../../services/v1/order.service';
import {DriverService} from '../../../services/v1/driver.service';
import {Driver} from '../../../interfaces/Driver';
import {Order} from '../../../interfaces/Order';
import {OrderDateService} from '../../../services/utils/order-date.service';
import {PopoverSelectDateComponent} from '../popover-select-date/popover-select-date.component';
import {GeocodeService} from '../../../services/v1/geocode.service';
import {OrderManagerService} from '../../../services/v1/order-manager.service';
import {ToastComponent} from '../../../components/toast/toast.component';

@Component({
  selector: 'app-urban-distribution-form',
  templateUrl: './urban-distribution-form.page.html',
  styleUrls: ['./urban-distribution-form.page.scss'],
})
export class UrbanDistributionFormPage implements OnInit {
  @Input() networkStatus: boolean;
  loading = false;
  form: FormGroup;
  locationExists = false;
  location: Location;
  driver: Driver;
  locations: Location[] = [];
  filteredLocations: Location[] = [];
  searchInputFC = new FormControl();
  driverSubscription: any;
  locationsSubscription: any;
  orderDateSubscription: any;
  orderDate: string;
  step = 1;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: false,
    autoplay: false
  };
  searching = false;
  @ViewChild('urbanDistributionSlide', {static: true}) urbanDistributionSlide: IonSlides;
  defaultLat = -27.4862341;
  defaultLng = -58.8624276;
  submitting = false;
  hasNewOrder = false;
  flagColor = '#FF4051';
  geocoding = false;

  constructor(private locationService: LocationService,
              private formBuilder: FormBuilder,
              private ngZone: NgZone,
              private popoverController: PopoverController,
              private orderDateService: OrderDateService,
              private geocodeService: GeocodeService,
              private orderService: OrderService,
              private orderManagerService: OrderManagerService,
              private driverService: DriverService,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private toastComponent: ToastComponent,
              private modalController: ModalController) {

    this.form = this.formBuilder.group({
      company_name: ['', Validators.required],
      location_name: ['', Validators.required],
      b: [''],
      v: [''],
      s: [''],
      m: [''],
      c: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      details: ['', Validators.required],
      phone: ['+54']
    });
  }

  getDriverProfile() {
    this.driverService.getProfile()
      .subscribe((response: any) => {
        this.driver = response.driver;
        this.form.controls.city.setValue(this.driver.city);
      });
  }

  ngOnInit(): void {
    this.driverSubscription = this.driverService.getDriver$()
      .subscribe(driver => {
        if (driver) {
          this.driver = driver;
          this.form.controls.city.setValue(this.driver.city);
        } else {
          this.getDriverProfile();
        }
      });

    this.orderDateSubscription = this.orderDateService.getOrderDate$()
      .subscribe(date => {
        this.orderDate = date;
      });

    this.locationsSubscription = this.locationService.getLocations$()
      .subscribe(locations => {
        this.locations = locations;
      });

    console.log(this.networkStatus);
  }

  dismiss() {
    this.modalController.dismiss({hasNewOrder: this.hasNewOrder});
  }

  setNextSlide() {
    this.urbanDistributionSlide.slideNext().then(() => {
      console.log('slided');
    });
  }

  ionViewWillLeave() {
    if (this.driverSubscription) {
      this.driverSubscription.unsubscribe();
    }

    if (this.orderDateSubscription) {
      this.orderDateSubscription.unsubscribe();
    }
  }

  async openSelectDatePopover(ev) {
    const popover = await this.popoverController.create({
      component: PopoverSelectDateComponent,
      event: ev
    });
    await popover.present();
    const {data} = await popover.onWillDismiss();
  }

  selectReceiver(order: Order) {
    this.searching = false;

    this.form.controls.company_name.setValue(order.receiver);
    order.phone ?
      this.form.controls.phone.setValue(order.phone) :
      this.form.controls.phone.reset('+54');

    const l = this.locations.filter(location => location.id === order.location_id)[0];
    this.selectLocation(l);
  }

  searchByKeyword(event) {
    this.form.controls.address.setValue(event.detail.value);
    const keyword = event.detail.value.toString().toLowerCase();
    if (keyword !== '') {
      this.searching = true;
      this.filteredLocations = [];
      this.filteredLocations = this.locations.filter(location =>
        location.full_address.toLowerCase().includes(keyword)
        || location.orders.filter(order =>
        order.receiver?.toLowerCase().includes(keyword)
        || order.phone?.toLowerCase().includes(keyword)).length > 0);
      this.filteredLocations = this.filteredLocations.slice(0, 100);
    } else {
      this.clear();
    }
  }

  selectFlagColor(color) {
    this.flagColor = color;
  }

  submit() {
    if (!this.locationExists) {
      this.geocodeAddress();
    } else {
      this.storeOrder();
    }
  }

  geocodeAddress() {
    this.geocoding = true;
    const addressParts = [];
    if (this.form.value.location_name) {
      addressParts.push(this.form.value.location_name);
    }
    if (this.form.value.address) {
      addressParts.push(this.form.value.address);
    }
    if (this.form.value.b) {
      addressParts.push(`barrio ${this.form.value.b}`);
    }
    if (this.form.value.city) {
      addressParts.push(this.form.value.city);
    }
    const address = addressParts.join(', ');
    const country = 'Argentina';
    console.log(address);
    this.geocodeService.GMGeocodeAddress(address, country, this.form.value.city).then((result: any) => {
      this.geocoding = false;
      this.showLocationMap(result.lat, result.lng);
    }).catch(err => {
      this.geocodeService.mapQuestGeocode(address, country, this.form.value.city).then((result: any) => {
        this.geocoding = false;
        this.showLocationMap(result.lat, result.lng);
      }).catch(error => {
        this.geocoding = false;
        this.showLocationMap(this.defaultLat, this.defaultLng);
      });
    });
  }

  storeOrder() {
    this.submitting = true;
    const body = {
      type: 'urban-distribution',
      location_id: this.location.id,
      company_name: this.form.value.company_name,
      details: this.form.value.details,
      phone: this.form.value.phone,
      date: this.orderDate,
      flag_color: this.flagColor,
      b: this.form.value.b,
      v: this.form.value.v,
      s: this.form.value.s,
      m: this.form.value.m,
      c: this.form.value.c,
      location_name: this.location.name,
      location_address: this.location.address,
      location_city: this.location.city,
      location_lat: this.location.lat,
      location_lng: this.location.lng,
      saved_client: this.location.saved_client
    };
    this.orderManagerService.store(body)
      .subscribe((response: any) => {
        this.location.b = this.form.value.b;
        this.location.v = this.form.value.v;
        this.location.s = this.form.value.s;
        this.location.m = this.form.value.m;
        this.location.c = this.form.value.c;
        this.submitting = false;
        this.clear();
        this.resetSlide();
      }, error => {
        this.submitting = false;
      });
  }

  storeLocation(body) {
    // this.submitting = true;
    // this.locationService.storeLocation(body)
    //   .subscribe((response: any) => {
    //     this.clear();
    //     this.resetSlide();
    //     this.submitting = false;
    //   }, error => {
    //     this.submitting = false;
    //   });

    this.submitting = true;
    this.orderManagerService.storeLocation(body)
      .subscribe((response: any) => {
        this.clear();
        this.resetSlide();
        this.submitting = false;
      }, error => {
        this.submitting = false;
        const message = error?.error?.custom_message || 'No se pudo registrar la dirección';
        this.toastComponent.presentToast(message, 'middle', 3000);
      });
  }

  resetSlide() {
    this.urbanDistributionSlide.slidePrev();
    this.hasNewOrder = true;
  }

  clear() {
    this.searching = false;
    this.filteredLocations = [];
    this.searchInputFC.setValue('');
    this.locationExists = false;
    this.resetForm();
  }

  addNewLocation() {
    this.searching = false;
    this.locationExists = false;
    this.filteredLocations = [];
    this.form.controls.company_name.setValue('');
    this.form.controls.address.setValue(this.searchInputFC.value);
  }

  addNewClient() {
    this.searching = false;
    this.locationExists = false;
    this.filteredLocations = [];
    this.form.controls.address.setValue('');
    this.form.controls.company_name.setValue(this.searchInputFC.value);
  }

  resetForm() {
    this.form.controls.location_name.setValue(this.searchInputFC.value);
    this.form.controls.address.setValue('');
    this.form.controls.city.setValue(this.driver ? this.driver.city : 'Corrientes');
    this.form.controls.company_name.setValue('');
    this.form.controls.details.setValue('');
    this.form.controls.phone.setValue('+54');
    this.form.controls.b.setValue('');
    this.form.controls.v.setValue('');
    this.form.controls.s.setValue('');
    this.form.controls.m.setValue('');
    this.form.controls.c.setValue('');

    this.form.controls.location_name.enable();
    this.form.controls.address.enable();
    this.form.controls.city.enable();
    this.form.controls.company_name.enable();
    this.form.controls.details.enable();
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

    this.form.controls.b.setValue(location.b);
    this.form.controls.v.setValue(location.v);
    this.form.controls.s.setValue(location.s);
    this.form.controls.m.setValue(location.m);
    this.form.controls.c.setValue(location.c);
  }

  async showLocationMap(lat: number, lng: number) {
    // const modal = await this.modalController.create({
    //   component: LocationMapComponent,
    //   cssClass: 'modal-show-location-map',
    //   componentProps: {
    //     lat,
    //     lng
    //   }
    // });
    // await modal.present();
    //
    // await modal.onDidDismiss().then(data => {
    //   if (data.data && data.data.success) {
    //     const body = {
    //       type: 'urban-distribution',
    //       name: this.form.value.location_name,
    //       address: this.form.value.address,
    //       city: this.form.value.city,
    //       company_name: this.form.value.company_name,
    //       details: this.form.value.details,
    //       phone: this.form.value.phone,
    //       date: this.orderDate,
    //       locality: null,
    //       administrative_area_level_1: null,
    //       administrative_area_level_2: null,
    //       lat: data.data.lat,
    //       lng: data.data.lng,
    //       flag_color: this.flagColor,
    //       b: this.form.value.b,
    //       v: this.form.value.v,
    //       s: this.form.value.s,
    //       m: this.form.value.m,
    //       c: this.form.value.c,
    //     };
    //     this.storeLocation(body);
    //   }
    // });


    // se guarda directo en vez de mostrar el modal
    const body = {
      type: 'urban-distribution',
      name: this.form.value.location_name,
      address: this.form.value.address,
      city: this.form.value.city,
      company_name: this.form.value.company_name,
      details: this.form.value.details,
      phone: this.form.value.phone,
      date: this.orderDate,
      locality: null,
      administrative_area_level_1: null,
      administrative_area_level_2: null,
      lat,
      lng,
      flag_color: this.flagColor,
      b: this.form.value.b,
      v: this.form.value.v,
      s: this.form.value.s,
      m: this.form.value.m,
      c: this.form.value.c,
    };
    this.storeLocation(body);
  }
}
