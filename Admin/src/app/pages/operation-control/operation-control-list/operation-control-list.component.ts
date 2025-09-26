import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OperationControl } from '../../../models/OperationControl';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { FormControl } from '@angular/forms';
import * as fileSaver from 'file-saver';

registerLocaleData(localeEsAr);
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { OperationControlService } from '../../../services/operation-control.service';
import { Driver } from '../../../models/Driver';
import { OperationControlDetailComponent } from '../operation-control-detail/operation-control-detail.component';
import { ActionConfirmComponent } from '../../../shared/action-confirm/action-confirm.component';
import { OperationControlCreditsComponent } from '../operation-control-credits/operation-control-credits.component';
import { CalculateValueComponent } from '../calculate-value/calculate-value.component';
import { EditDriverValuesDialogComponent } from '../../../shared/edit-driver-values-dialog/edit-driver-values-dialog.component';
import { OperationControlEditComponent } from '../operation-control-edit/operation-control-edit.component';
import { Material } from '../../../models/Material';
import { Ubi } from '../../../models/Ubi';

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
  selector: 'app-operation-control-list',
  templateUrl: './operation-control-list.component.html',
  styleUrls: ['./operation-control-list.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class OperationControlListComponent implements OnInit {
  operationControls: OperationControl[] = [];
  companies: any[] = [];
  filteredOperationsByCompany: OperationControl[] = [];
  dataSource: MatTableDataSource<OperationControl>;
  displayedColumns = ['driver.name', 'date', 'branch.company.name', 'zone', 'branch.name',
    'material_ubi.material.name', 'material_ubi.ubi.name',
    'packages', 'hours', 'km', 'amount', 'approved', 'options'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  companyFC = new FormControl();
  driverFC = new FormControl();
  drivers: Driver[] = [];
  date = new FormControl(moment());
  materials: Material[] = [];
  ubis: Ubi[] = [];

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
    this.operationControls = [];
    this.setData(this.operationControls);
    this.getOperations();
  }

  constructor(private dialog: MatDialog,
              private operationControlService: OperationControlService) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getOperations();
    this.getCompanies();
  }

  getOperations() {
    const date = new Date(this.date.value);
    this.operationControlService.getOperationControls(date.getMonth() + 1, date.getFullYear())
      .subscribe(
        (response: any) => {
          this.operationControls = response.operations;
          this.materials = response.materials;
          this.ubis = response.ubis;
          console.log(this.operationControls);
          this.setData(this.operationControls);
        });
  }

  getCompanies() {
    this.operationControlService.getCompanies()
      .subscribe((response: any) => {
        this.companies = response.companies;
      });
  }

  setData(operations: OperationControl[]) {
    this.dataSource = new MatTableDataSource(operations);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onCompanyChange(event) {
    console.log(event.value);
    if (event.value && event.value !== '') {
      console.log(event.value);
      this.drivers = [];
      this.driverFC.reset();
      this.filteredOperationsByCompany = this.operationControls.filter(
        operationControl => operationControl.company?.toString().toLowerCase() === event.value.toString().toLowerCase());
      const driversAux = this.filteredOperationsByCompany.map(operationControl => operationControl.driver);
      driversAux.map(driver => {
        if (!this.drivers.find(d => d.id === driver.id)) {
          this.drivers.push(driver);
        }
      });
    } else {
      console.log('else...');
      console.log(this.operationControls);
      this.filteredOperationsByCompany = this.operationControls.filter(
        operationControl => operationControl.company === null);
      const driversAux = this.filteredOperationsByCompany.map(operationControl => operationControl.driver);
      driversAux.map(driver => {
        if (!this.drivers.find(d => d.id === driver.id)) {
          this.drivers.push(driver);
        }
      });
    }
    this.setData(this.filteredOperationsByCompany);
  }

  downloadReport() {
    const time = new Date().getTime();
    const date = new Date(this.date.value);
    const driver = this.drivers.filter(d => d.id === this.driverFC.value)[0];

    const body = {
      driverId: this.driverFC.value,
      company: this.companyFC.value,
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
    console.log(body);
    this.operationControlService.downloadReport(body, time)
      .subscribe(
        response => {
          const filename = `control_operativo(${date.getMonth() + 1}-${date.getFullYear()})_${driver.full_name}.xlsx`;
          fileSaver.saveAs(response, filename);
        },
        error => {

        },
        () => {
        }
      );
  }

  viewOperationControlDetail(operationControl: OperationControl) {
    const dialogRef = this.dialog.open(OperationControlDetailComponent, {
      data: {
        operationControl
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {

      }
    });
  }

  calculateValue(operationControl: OperationControl) {
    const dialogRef = this.dialog.open(CalculateValueComponent, {
      data: {
        operationControl,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.getOperations();
      }
    });
  }

  edit(operationControl: OperationControl) {
    const dialogRef = this.dialog.open(OperationControlEditComponent, {
      data: {
        operationControl,
        materials: this.materials,
        ubis: this.ubis
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.getOperations();
      }
    });
  }

  approveOperationControl(operationControl: OperationControl) {
    const dialogRef = this.dialog.open(ActionConfirmComponent, {
      data: {
        // message: `¿Aprobar el control de operaciones? Se sumarán los créditos para ${operationControl.km} km.`
        message: `¿Aprobar el control de operaciones?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.operationControlService.approveOperationControl(operationControl)
          .subscribe((response: any) => {
            this.getOperations();
          });
      }
    });
  }

  sumNoDevCredits(operationControl: OperationControl) {
    const dialogRef = this.dialog.open(ActionConfirmComponent, {
      data: {
        message: `Se sumarán los créditos correspondientes a 0 devoluciones`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.operationControlService.sumNoDevCredits(operationControl)
          .subscribe((response: any) => {
            this.getOperations();
          });
      }
    });
  }

  viewCredits(operationControl: OperationControl) {
    const dialogRef = this.dialog.open(OperationControlCreditsComponent, {
      data: {
        operationControl
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {

      }
    });
  }

  editDriverValues(driver: Driver) {
    const dialogRef = this.dialog.open(EditDriverValuesDialogComponent, {
      data: {
        driver
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {

      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
