import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { FormControl } from '@angular/forms';

registerLocaleData(localeEsAr);
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { Order } from '../../../models/Order';
import { OrderService } from '../../../services/order.service';
import { UrbanDistributionDetailComponent } from '../urban-distribution-detail/urban-distribution-detail.component';
import { _isNumberValue } from '@angular/cdk/coercion';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-urban-distribution-list',
  templateUrl: './urban-distribution-list.component.html',
  styleUrls: ['./urban-distribution-list.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class UrbanDistributionListComponent implements OnInit {
  orders: Order[] = [];
  dataSource: MatTableDataSource<Order>;
  displayedColumns = ['driver.full_name', 'receiver', 'phone', 'location.name', 'status_es', 'created_at', 'delivered_at', 'options'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  startDateFC = new FormControl();
  endDateFC = new FormControl();
  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
    this.getOrdersByDate();
  }

  constructor(private orderService: OrderService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getOrdersByDate();
  }

  getOrdersByDate() {
    const date = new Date(this.date.value);
    console.log(date);
    this.orderService.getOrdersByDate('urban-distribution', date.getMonth() + 1, date.getFullYear())
      .subscribe((response: any) => {
        this.orders = response.orders;
        this.dataSource = new MatTableDataSource(this.orders);
        this.dataSource.paginator = this.paginator;
        this.setSortingDataAccessor();
        this.setDataFilterPredicate();
      });
  }

  viewOrderDetail(order: Order) {
    const dialogRef = this.dialog.open(UrbanDistributionDetailComponent, {
      data: {
        order
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {

      }
    });
  }

  search() {
    const startDate = new Date(this.startDateFC.value).toISOString();
    const endDate = new Date(this.endDateFC.value).toISOString();
    this.orderService.getOrdersByDateRange('urban-distribution', startDate, endDate)
      .subscribe((response: any) => {
        this.orders = response.orders;
        this.dataSource = new MatTableDataSource(this.orders);
        this.dataSource.paginator = this.paginator;
        this.setSortingDataAccessor();
        this.setDataFilterPredicate();
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  setSortingDataAccessor() {
    this.dataSource.sortingDataAccessor =
      (data: any, sortHeaderId: string): string | number => {
        let value = null;
        if (sortHeaderId.includes('.')) {
          const ids = sortHeaderId.split('.');
          value = data;
          ids.forEach(function (x) {
            value = value ? value[x] : null;
          });
        } else {
          value = data[sortHeaderId];
        }
        return _isNumberValue(value) ? Number(value) : value;
      };

    this.dataSource.sort = this.sort;
  }

  setDataFilterPredicate() {
    this.dataSource.filterPredicate = (order: Order, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();

      const listAsFlatString = (obj): string => {
        let returnVal = '';

        Object.values(obj).forEach((val) => {
          if (typeof val !== 'object') {
            returnVal = returnVal + ' ' + val;
          } else if (val !== null) {
            returnVal = returnVal + ' ' + listAsFlatString(val);
          }
        });

        return returnVal.trim().toLowerCase();
      };

      return listAsFlatString(order).includes(transformedFilter);
    };
  }

}
