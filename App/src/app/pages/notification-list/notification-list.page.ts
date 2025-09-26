import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/v1/notification.service';
import {Notification} from '../../interfaces/Notification';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.page.html',
  styleUrls: ['./notification-list.page.scss'],
})
export class NotificationListPage implements OnInit {
  notifications: Notification[] = [];
  loading = true;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications() {
    this.loading = true;
    this.notificationService.getNotifications()
      .subscribe((response: any) => {
          this.notifications = response.notifications;
        }, error => {
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getNotifications();
      event.target.complete();
    }, 2000);
  }

}
