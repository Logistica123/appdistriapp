import {Component, OnInit} from '@angular/core';
import {ReminderService} from '../../../services/v1/reminder.service';
import {Reminder} from '../../../interfaces/Reminder';
import {ReminderFormPage} from '../reminder-form/reminder-form.page';
import {AlertController, ModalController} from '@ionic/angular';
import {FuelControl} from '../../../interfaces/FuelControl';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.page.html',
  styleUrls: ['./reminder-list.page.scss'],
})
export class ReminderListPage implements OnInit {
  reminders: Reminder[] = [];
  loading = true;
  submitting = false;

  constructor(private reminderService: ReminderService,
              private alertController: AlertController,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.getReminders();
  }

  getReminders() {
    this.loading = true;
    this.reminderService.getReminders()
      .subscribe((response: any) => {
        this.reminders = response.reminders;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  async addReminder() {
    const modal = await this.modalController.create({
      component: ReminderFormPage,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getReminders();
    }
  }

  async editReminder(reminder: Reminder) {
    const modal = await this.modalController.create({
      component: ReminderFormPage,
      componentProps: {reminder}
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getReminders();
    }
  }

  async presentReminderAlertConfirm(reminder: Reminder) {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar el recordatorio?',
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
            this.deleteReminder(reminder);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteReminder(reminder: Reminder) {
    this.submitting = true;
    this.reminderService.deleteReminder(reminder)
      .subscribe((response: any) => {
        this.reminders = this.reminders.filter(item => item.id !== reminder.id);
        this.submitting = false;
      }, error => {
        this.submitting = false;
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getReminders();
      event.target.complete();
    }, 2000);
  }

}
