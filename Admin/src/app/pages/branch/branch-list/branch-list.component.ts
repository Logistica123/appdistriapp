import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ActionConfirmComponent } from '../../../shared/action-confirm/action-confirm.component';
import { BranchService } from '../../../services/branch.service';
import { Branch } from '../../../models/Branch';
import { BranchFormComponent } from '../branch-form/branch-form.component';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  branches: Branch[] = [];
  dataSource: MatTableDataSource<Branch>;
  displayedColumns = ['company.name', 'name', 'type_es', 'hour_rate', 'km_rate', 'package_rate', 'options'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private branchService: BranchService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getBranches();
  }

  getBranches() {
    this.branchService.getBranches()
      .subscribe((response: any) => {
        this.branches = response.branches;
        this.dataSource = new MatTableDataSource(this.branches);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  add() {
    const dialogRef = this.dialog.open(BranchFormComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result['success']) {
        this.getBranches();
      }
    });
  }

  edit(branch: Branch) {
    const dialogRef = this.dialog.open(BranchFormComponent, {
      data: {
        branch: branch
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result['success']) {
        this.getBranches();
      }
    });
  }

  delete(branch: Branch) {
    const dialogRef = this.dialog.open(ActionConfirmComponent, {
      data: {
        message: `¿Desea eliminar la sucursal ${branch.name}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.branchService.delete(branch)
          .subscribe((response: any) => {
            this.getBranches();
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

