import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, ToastController} from '@ionic/angular';
import {Driver} from '../../../interfaces/Driver';
import {DriverService} from '../../../services/v1/driver.service';
import {GeocodeService} from '../../../services/v1/geocode.service';
import {LocationMapComponent} from '../../../components/modals/location-map/location-map.component';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {
  form: FormGroup;
  @Input() driver: Driver;
  showInputErrorMessage = false;
  isGeocodingStartAddress = false;
  startAddressErrorMessage: string = null;
  private readonly geocodeCountry = 'Argentina';
  private readonly defaultStartLocation = {lat: -27.469134, lng: -58.830222};

  constructor(private formBuilder: FormBuilder,
              private modalController: ModalController,
              private driverService: DriverService,
              private geocodeService: GeocodeService,
              private toastController: ToastController) {
    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      phone_number: ['', Validators.required],
      bank_cbu: ['', Validators.pattern('^(\\s*|\\d{22})$')],
      bank_owner_is_driver: [true],
      bank_holder_name: ['', Validators.maxLength(255)],
      company: [''],
      license_plate: ['', Validators.required],
      start_address: [''],
      start_lat: [''],
      start_lng: [''],
    });

    this.form.controls.start_address.valueChanges.subscribe(value => {
      if (!value) {
        this.clearStartLocation();
      }
    });
  }

  ngOnInit() {
    this.setDriver();
  }

  async submit() {
    if (!this.form.valid) {
      this.showInputErrorMessage = true;
      return;
    }

    const hasValidStartLocation = await this.ensureStartLocationCoords();
    if (!hasValidStartLocation) {
      this.showInputErrorMessage = true;
      return;
    }

    this.showInputErrorMessage = false;
    this.updateProfile();
  }

  updateProfile() {
    const body = this.setBody();
    this.driverService.updateProfile(body)
      .subscribe(() => {
        this.updateDriverSnapshot(body);
        this.dismiss(true);
      });
  }

  private updateDriverSnapshot(body: any) {
    if (!this.driver) {
      this.driver = {...body} as Driver;
    } else {
      this.driver = {
        ...this.driver,
        city: body.city,
        phone_number: body.phone_number,
        company: body.company,
        license_plate: body.license_plate,
        bank_cbu: body.bank_cbu || this.driver.bank_cbu,
        bank_owner_is_driver: body.bank_owner_is_driver,
        bank_holder_name: body.bank_holder_name,
        start_address: body.start_address,
        start_lat: body.start_lat,
        start_lng: body.start_lng,
      };
    }

    this.driverService.setDriver$(this.driver);
  }

  setDriver() {
    this.form.controls.phone_number.setValue(this.driver.phone_number);
    this.form.controls.city.setValue(this.driver.city);
    this.form.controls.company.setValue(this.driver.company);
    this.form.controls.bank_cbu.setValue(this.driver.bank_cbu || '');
    this.form.controls.bank_owner_is_driver.setValue(this.driver.bank_owner_is_driver !== undefined ? this.driver.bank_owner_is_driver : true);
    this.form.controls.bank_holder_name.setValue(this.driver.bank_holder_name || '');
    this.form.controls.license_plate.setValue(this.driver.license_plate);
    this.form.controls.start_address.setValue(this.driver.start_address || '');
    this.form.controls.start_lat.setValue(this.normalizeCoord(this.driver.start_lat));
    this.form.controls.start_lng.setValue(this.normalizeCoord(this.driver.start_lng));
  }

  setBody() {
    return {
      city: this.form.value.city,
      phone_number: this.form.value.phone_number,
      company: this.form.value.company,
      license_plate: this.form.value.license_plate,
      bank_cbu: this.form.value.bank_cbu ? this.form.value.bank_cbu.replace(/\s+/g, '') : null,
      bank_owner_is_driver: this.form.value.bank_owner_is_driver,
      bank_holder_name: this.form.value.bank_owner_is_driver ? null : (this.form.value.bank_holder_name ? this.form.value.bank_holder_name.trim() : null),
      start_address: this.form.value.start_address ? this.form.value.start_address.trim() : null,
      start_lat: this.form.value.start_lat ? Number(this.form.value.start_lat) : null,
      start_lng: this.form.value.start_lng ? Number(this.form.value.start_lng) : null,
    };
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

  onBankOwnerToggle(event: any) {
    if (event?.detail?.checked) {
      this.form.controls.bank_holder_name.setValue('');
    }
  }

  get showBankCbuErrorMessage(): boolean {
    const control = this.form.controls.bank_cbu;
    const hasValue = !!control?.value;
    if (!control || !hasValue) {
      return false;
    }

    return control.invalid && (this.showInputErrorMessage || control.touched || control.dirty);
  }

  async geocodeStartAddress() {
    this.startAddressErrorMessage = null;
    const rawAddress = (this.form.value.start_address || '').trim();
    const city = this.getCurrentCity();

    if (!rawAddress || !city) {
      this.startAddressErrorMessage = 'Completá la dirección y la ciudad para continuar.';
      return;
    }

    this.isGeocodingStartAddress = true;
    try {
      const fullAddress = `${rawAddress}, ${city}`;
      const coords = await this.tryGeocode(fullAddress, city);
      if (!coords) {
        this.startAddressErrorMessage = 'No pudimos obtener la ubicación. Probá ajustar la dirección.';
        return;
      }

      this.form.controls.start_lat.setValue(this.normalizeCoord(coords.lat));
      this.form.controls.start_lng.setValue(this.normalizeCoord(coords.lng));
      await this.presentToast('Actualizamos tu punto de partida.');
    } catch (error) {
      console.error('Error geocoding start address', error);
      this.startAddressErrorMessage = 'No pudimos obtener la ubicación. Probá ajustar la dirección.';
    } finally {
      this.isGeocodingStartAddress = false;
    }
  }

  async openStartLocationPicker() {
    this.startAddressErrorMessage = null;
    const {lat, lng} = await this.getInitialCoordsForPicker();
    const modal = await this.modalController.create({
      component: LocationMapComponent,
      cssClass: 'modal-show-location-map',
      componentProps: {lat, lng}
    });

    await modal.present();
    const result = await modal.onDidDismiss();
    if (result?.data?.success) {
      this.form.controls.start_lat.setValue(this.normalizeCoord(result.data.lat));
      this.form.controls.start_lng.setValue(this.normalizeCoord(result.data.lng));
      await this.presentToast('Actualizamos tu punto de partida.');
    }
  }

  private async getInitialCoordsForPicker(): Promise<{lat: number; lng: number}> {
    const storedLat = this.parseCoord(this.form.value.start_lat);
    const storedLng = this.parseCoord(this.form.value.start_lng);
    if (storedLat !== null && storedLng !== null) {
      return {lat: storedLat, lng: storedLng};
    }

    const rawAddress = (this.form.value.start_address || '').trim();
    const city = this.getCurrentCity();
    if (rawAddress && city) {
      const fullAddress = `${rawAddress}, ${city}`;
      try {
        const coords = await this.tryGeocode(fullAddress, city);
        if (coords) {
          return coords;
        }
      } catch (error) {
        console.warn('No se pudo geocodificar la dirección para el mapa, usando valor por defecto', error);
      }
    }

    return this.defaultStartLocation;
  }

  private getCurrentCity(): string {
    return (this.form.value.city || this.driver?.city || '').trim();
  }

  private async tryGeocode(fullAddress: string, city: string): Promise<{lat: number; lng: number}> {
    try {
      return await this.geocodeService.GMGeocodeAddress(fullAddress, this.geocodeCountry, city);
    } catch (gmError) {
      console.warn('Google geocode failed, trying MapQuest', gmError);
      try {
        return await this.geocodeService.mapQuestGeocode(fullAddress, this.geocodeCountry, city);
      } catch (mapQuestError) {
        console.error('MapQuest geocode failed', mapQuestError);
        throw mapQuestError;
      }
    }
  }

  private clearStartLocation() {
    this.form.controls.start_lat.setValue('');
    this.form.controls.start_lng.setValue('');
  }

  private async ensureStartLocationCoords(): Promise<boolean> {
    this.startAddressErrorMessage = null;
    const rawAddress = (this.form.value.start_address || '').trim();
    if (!rawAddress) {
      return true;
    }

    const lat = this.parseCoord(this.form.value.start_lat);
    const lng = this.parseCoord(this.form.value.start_lng);
    if (lat !== null && lng !== null) {
      return true;
    }

    const city = this.getCurrentCity();
    if (!city) {
      this.startAddressErrorMessage = 'Completá la ciudad para usar esta dirección.';
      return false;
    }

    this.isGeocodingStartAddress = true;
    try {
      const coords = await this.tryGeocode(`${rawAddress}, ${city}`, city);
      if (!coords) {
        this.startAddressErrorMessage = 'No pudimos obtener la ubicación. Probá ajustar la dirección.';
        return false;
      }
      this.form.controls.start_lat.setValue(this.normalizeCoord(coords.lat));
      this.form.controls.start_lng.setValue(this.normalizeCoord(coords.lng));
      return true;
    } catch (error) {
      console.error('Error ensuring start location coordinates', error);
      this.startAddressErrorMessage = 'No pudimos obtener la ubicación. Probá ajustar la dirección.';
      return false;
    } finally {
      this.isGeocodingStartAddress = false;
    }
  }

  private normalizeCoord(value?: number | string): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }
    const numericValue = typeof value === 'string' ? Number(value) : value;
    if (isNaN(numericValue)) {
      return '';
    }
    return numericValue.toFixed(6);
  }

  get startCoordsLabel(): string {
    const lat = this.form.value.start_lat;
    const lng = this.form.value.start_lng;
    if (!lat || !lng) {
      return 'Sin definir';
    }
    return `${lat}, ${lng}`;
  }

  private parseCoord(value: any): number | null {
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const numeric = Number(value);
    return isNaN(numeric) ? null : numeric;
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      position: 'middle'
    });
    await toast.present();
  }

}
