import { Component, OnInit, ViewChild } from '@angular/core';
import localeEsAr from '@angular/common/locales/es-AR';
import * as fileSaver from 'file-saver';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsAr);
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { TollControl } from '../../../models/TollControl';
import { TollControlService } from '../../../services/toll-control.service';
import { TollControlImageComponent } from '../toll-control-image/toll-control-image.component';

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
  selector: 'app-toll-control-list',
  templateUrl: './toll-control-list.component.html',
  styleUrls: ['./toll-control-list.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class TollControlListComponent implements OnInit {
  tollControls: TollControl[] = [];
  dataSource: MatTableDataSource<TollControl>;
  displayedColumns = ['driver.name', 'date', 'station', 'total', 'images'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
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
    this.getTollControls();
  }

  constructor(private dialog: MatDialog,
              private tollControlService: TollControlService) {
  }

  ngOnInit() {
    console.log('Control peajes...');
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getTollControls();
  }

  getTollControls() {
    const date = new Date(this.date.value);
    console.log(date.getMonth() + 1);
    console.log(date.getFullYear());
    this.tollControlService.getTollControls(date.getMonth() + 1, date.getFullYear())
      .subscribe(
        (response: any) => {
          this.tollControls = response.toll_controls;
          this.setData(this.tollControls);
        });
  }

  setData(tollControls: TollControl[]) {
    this.dataSource = new MatTableDataSource(tollControls);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  downloadReport() {
    const time = new Date().getTime();
    const date = new Date(this.date.value);
    console.log(date.getMonth() + 1);
    console.log(date.getFullYear());
    this.tollControlService.downloadReport(date.getMonth() + 1, date.getFullYear(), time)
      .subscribe(
        response => {
          const filename = 'control_peaje.xlsx';
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

  viewImages(tollControl: TollControl) {
    console.log(tollControl);
    const dialogRef = this.dialog.open(TollControlImageComponent, {
      width: '480px',
      data: {tollControl}
    });
  }
}
