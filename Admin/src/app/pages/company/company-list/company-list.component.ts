import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from '../../../models/Company';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CompanyService } from '../../../services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { ActionConfirmComponent } from '../../../shared/action-confirm/action-confirm.component';
import { CompanyFormComponent } from '../company-form/company-form.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  dataSource: MatTableDataSource<Company>;
  displayedColumns = ['name', 'options'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private companyService: CompanyService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe((response: any) => {
        this.companies = response.companies;
        this.dataSource = new MatTableDataSource(this.companies);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  addCompany() {
    const dialogRef = this.dialog.open(CompanyFormComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result['success']) {
        this.getCompanies();
      }
    });
  }

  editCompany(company: Company) {
    const dialogRef = this.dialog.open(CompanyFormComponent, {
      data: {
        company: company
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result['success']) {
        this.getCompanies();
      }
    });
  }

  deleteCompany(company: Company) {
    const dialogRef = this.dialog.open(ActionConfirmComponent, {
      data: {
        message: `¿Desea eliminar la empresa ${company.name}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.companyService.deleteCompany(company)
          .subscribe((response: any) => {
            this.getCompanies();
          }, error => {

          }, () => {

          });
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
