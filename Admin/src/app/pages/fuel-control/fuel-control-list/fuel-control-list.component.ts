import { Component, OnInit, ViewChild } from '@angular/core';
import localeEsAr from '@angular/common/locales/es-AR';
import * as fileSaver from 'file-saver';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr);
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FuelControl } from '../../../models/FuelControl';
import { FormControl } from '@angular/forms';
import { FuelControlService } from '../../../services/fuel-control.service';
import { FuelControlImageComponent } from '../fuel-control-image/fuel-control-image.component';

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
  selector: 'app-fuel-control-list',
  templateUrl: './fuel-control-list.component.html',
  styleUrls: ['./fuel-control-list.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class FuelControlListComponent implements OnInit {
  fuels: FuelControl[] = [];
  filteredOperations: FuelControl[] = [];
  dataSource: MatTableDataSource<FuelControl>;
  displayedColumns = ['driver.name', 'date', 'station', 'fuel_type', 'liters', 'price', 'total', 'images'];
  dateFC = new FormControl();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selectedDate = new Date();

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
    this.getFuels();
  }

  constructor(private dialog: MatDialog,
              private fuelControlService: FuelControlService) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getFuels();
  }

  getFuels() {
    const date = new Date(this.date.value);
    console.log(date.getMonth() + 1);
    console.log(date.getFullYear());
    this.fuelControlService.getFuelControls(date.getMonth() + 1, date.getFullYear())
      .subscribe(
        (response: any) => {
          this.fuels = response.fuels;
          this.setData(this.fuels);
        });
  }

  setData(fuels: FuelControl[]) {
    this.dataSource = new MatTableDataSource(fuels);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  downloadReport() {
    const time = new Date().getTime();
    const date = new Date(this.date.value);
    console.log(date.getMonth() + 1);
    console.log(date.getFullYear());
    this.fuelControlService.downloadReport(date.getMonth() + 1, date.getFullYear(), time)
      .subscribe(
        response => {
          const filename = 'control_combustible.xlsx';
          fileSaver.saveAs(response, filename);
        },
        error => {

        },
        () => {
        }
      );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  viewImages(fuelControl: FuelControl) {
    console.log(fuelControl);
    const dialogRef = this.dialog.open(FuelControlImageComponent, {
      width: '480px',
      data: {fuelControl}
    });
  }

}
