import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {TollControlService} from '../../../../services/v1/toll-control.service';
import {TollControl} from '../../../../interfaces/TollControl';
import {TollControlFormPage} from '../toll-control-form/toll-control-form.page';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-toll-control-list',
  templateUrl: './toll-control-list.page.html',
  styleUrls: ['./toll-control-list.page.scss'],
})
export class TollControlListPage implements OnInit, AfterViewInit {
  loading = true;
  submitting = false;
  tollControls: TollControl[] = [];
  date = new Date();
  dateFC = new FormControl();

  constructor(private modalController: ModalController,
              private alertController: AlertController,
              private tollControlService: TollControlService) {
  }

  ngOnInit() {
    //
  }

  ngAfterViewInit() {
    this.date = new Date();
    this.dateFC.setValue(this.date.toISOString());
    this.getTollControls();
  }

  onDateChange(event) {
    this.date = new Date(event.detail.value);
    this.getTollControls();
  }

  getTollControls() {
    this.loading = true;
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    this.tollControlService.getTollControls(month, year)
      .subscribe((response: any) => {
        this.tollControls = response.toll_controls;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  async addTollControl() {
    const modal = await this.modalController.create({
      component: TollControlFormPage,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getTollControls();
    }
  }

  async editTollControl(tollControl: TollControl) {
    const modal = await this.modalController.create({
      component: TollControlFormPage,
      componentProps: {
        tollControl
      }
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getTollControls();
    }
  }

  async presentDeleteTollControlAlertConfirm(tollControl: TollControl) {
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
            this.deleteTollControl(tollControl);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteTollControl(tollControl: TollControl) {
    this.submitting = true;
    this.tollControlService.deleteTollControl(tollControl)
      .subscribe((response: any) => {
        this.tollControls = this.tollControls.filter(item => item.id !== tollControl.id);
        this.submitting = false;
      }, error => {
        this.submitting = false;
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getTollControls();
      event.target.complete();
    }, 2000);
  }

}
