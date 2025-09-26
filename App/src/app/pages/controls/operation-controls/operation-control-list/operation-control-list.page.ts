import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {OperationControlService} from '../../../../services/v1/operation-control.service';
import {OperationControlService as OperationControlServiceV2} from '../../../../services/v2/operation-control.service';
import {OperationControl} from '../../../../interfaces/OperationControl';
import {OperationControlFormPage} from '../operation-control-form/operation-control-form.page';
import {FormControl} from '@angular/forms';
import {DateService} from '../../../../services/utils/date.service';

@Component({
  selector: 'app-operation-control-list',
  templateUrl: './operation-control-list.page.html',
  styleUrls: ['./operation-control-list.page.scss'],
})
export class OperationControlListPage implements OnInit, AfterViewInit {
  operationControls: OperationControl[] = [];
  loading = true;
  submitting = false;
  date = new Date();
  dateFC = new FormControl();

  constructor(private modalController: ModalController,
              private alertController: AlertController,
              private dateService: DateService,
              private operationControlService: OperationControlService,
              private operationControlServiceV2: OperationControlServiceV2) {
  }

  ngOnInit() {
    //
  }

  ngAfterViewInit() {
    this.date = new Date();
    this.dateFC.setValue(this.dateService.getToday());
    console.log(this.dateFC.value);
    this.getOperationControls();
  }

  onDateChange(event) {
    this.date = new Date(event.detail.value);
    this.getOperationControls();
  }

  getOperationControls() {
    this.loading = true;
    console.log(this.date);
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    this.operationControlServiceV2.getOperationControls(month, year)
      .subscribe((response: any) => {
        this.operationControls = response.operation_controls;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  async addOperationControl() {
    const modal = await this.modalController.create({
      component: OperationControlFormPage,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getOperationControls();
    }
  }

  async editOperationControl(operationControl: OperationControl) {
    const modal = await this.modalController.create({
      component: OperationControlFormPage,
      componentProps: {
        operationControl
      }
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getOperationControls();
    }
  }

  async presentDeleteOperationControlAlertConfirm(operationControl: OperationControl) {
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
            this.deleteOperationControl(operationControl);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteOperationControl(operationControl: OperationControl) {
    this.submitting = true;
    this.operationControlService.deleteOperationControl(operationControl)
      .subscribe((response: any) => {
        this.operationControls = this.operationControls.filter(item => item.id !== operationControl.id);
        this.submitting = false;
      }, error => {
        this.submitting = false;
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getOperationControls();
      event.target.complete();
    }, 2000);
  }

}
