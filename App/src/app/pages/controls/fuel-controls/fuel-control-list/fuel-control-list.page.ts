import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FuelControl} from '../../../../interfaces/FuelControl';
import {FuelControlService} from '../../../../services/v1/fuel-control.service';
import {AlertController, ModalController} from '@ionic/angular';
import {FuelControlFormPage} from '../fuel-control-form/fuel-control-form.page';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-fuel-control-list',
  templateUrl: './fuel-control-list.page.html',
  styleUrls: ['./fuel-control-list.page.scss'],
})
export class FuelControlListPage implements OnInit, AfterViewInit {
  loading = true;
  submitting = false;
  fuelControls: FuelControl[] = [];
  date = new Date();
  dateFC = new FormControl();

  constructor(private modalController: ModalController,
              private alertController: AlertController,
              private fuelControlService: FuelControlService) {
  }

  ngOnInit() {
    //
  }

  ngAfterViewInit() {
    this.date = new Date();
    this.dateFC.setValue(this.date.toISOString());
    this.getFuelControls();
  }

  onDateChange(event) {
    this.date = new Date(event.detail.value);
    this.getFuelControls();
  }

  getFuelControls() {
    this.loading = true;
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    this.fuelControlService.getFuelControls(month, year)
      .subscribe((response: any) => {
        this.fuelControls = response.fuel_controls;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  async addFuelControl() {
    const modal = await this.modalController.create({
      component: FuelControlFormPage,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getFuelControls();
    }
  }

  async editFuelControl(fuelControl: FuelControl) {
    const modal = await this.modalController.create({
      component: FuelControlFormPage,
      componentProps: {
        fuelControl
      }
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getFuelControls();
    }
  }

  async presentDeleteFuelControlAlertConfirm(fuelControl: FuelControl) {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar registro?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.deleteFuelControl(fuelControl);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteFuelControl(fuelControl: FuelControl) {
    this.submitting = true;
    this.fuelControlService.deleteFuelControl(fuelControl)
      .subscribe((response: any) => {
        this.fuelControls = this.fuelControls.filter(item => item.id !== fuelControl.id);
        this.submitting = false;
      }, error => {
        this.submitting = false;
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getFuelControls();
      event.target.complete();
    }, 2000);
  }

}
