import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DriverNotificationFormComponent } from '../../driver/driver-notification-form/driver-notification-form.component';
import { NotificationFormComponent } from '../notification-form/notification-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications: Notification[] = [];
  dataSource: MatTableDataSource<Notification>;
  displayedColumns = ['text', 'drivers'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private notificationService: NotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getNotifications();
  }

  getNotifications() {
    this.notificationService.getNotifications()
      .subscribe((response: any) => {
        console.log(response);
        this.notifications = response.notifications;
        this.dataSource = new MatTableDataSource(this.notifications);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  sendNotification() {
    const dialogRef = this.dialog.open(NotificationFormComponent, {
      data: {
        // driver
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {

      }
    });
  }

}
