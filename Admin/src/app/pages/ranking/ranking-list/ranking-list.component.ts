import { Component, OnInit, ViewChild } from '@angular/core';
import { Driver } from '../../../models/Driver';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DriverService } from '../../../services/driver.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {
  drivers: Driver[] = [];
  dataSource: MatTableDataSource<Driver>;
  displayedColumns = ['name', 'email', 'company.name', 'score'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dialog: MatDialog,
              private driverService: DriverService) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getDriverScores();
  }

  getDriverScores() {
    this.driverService.getDriverScores()
      .subscribe(
        (response: any) => {
          this.drivers = response.drivers;
          console.log(this.drivers);
          this.dataSource = new MatTableDataSource(this.drivers);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }

  // addDriver() {
  //   const dialogRef = this.dialog.open(DriverFormComponent, {});
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result['success']) {
  //       this.getDrivers();
  //     }
  //   });
  // }

  // editDriver(driver: Driver) {
  //   const dialogRef = this.dialog.open(DriverFormComponent, {
  //     data: {
  //       driver: driver
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result['success']) {
  //       this.getDrivers();
  //     }
  //   });
  // }

  // deleteDriver(driver: Driver) {
  //   const dialogRef = this.dialog.open(ActionConfirmComponent, {
  //     data: {
  //       message: `¿Desea eliminar el repartidor ${driver.full_name}?`
  //     }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result.success) {
  //       this.driverService.deleteDriver(driver)
  //         .subscribe((response: any) => {
  //           this.getDrivers();
  //         }, error => {
  //
  //         }, () => {
  //
  //         });
  //     }
  //   });
  // }

  // resetDriverPassword(driver: Driver) {
  //   const dialogRef = this.dialog.open(ActionConfirmComponent, {
  //     data: {
  //       message: `¿Desea restablecer la contraseña del repartidor ${driver.full_name}?`
  //     }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result.success) {
  //       this.driverService.resetPassword(driver)
  //         .subscribe((response: any) => {
  //
  //         }, error => {
  //
  //         }, () => {
  //
  //         });
  //     }
  //   });
  // }

  // updateStatus(event, driver: Driver) {
  //   const status = event.checked ? 'active' : 'inactive';
  //   const body = {
  //     status
  //   };
  //   this.driverService.updateDriverStatus(driver, body)
  //     .subscribe((response: any) => {
  //       this.getDrivers();
  //     }, error => {
  //
  //     }, () => {
  //
  //     });
  // }

  // sendNotification(driver: Driver) {
  //   const dialogRef = this.dialog.open(DriverNotificationFormComponent, {
  //     data: {
  //       driver
  //     }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result.success) {
  //
  //     }
  //   });
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
