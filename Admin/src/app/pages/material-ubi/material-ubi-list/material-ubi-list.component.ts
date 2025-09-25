import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialUbi } from '../../../models/MaterialUbi';
import { MaterialUbiService } from '../../../services/material-ubi.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MaterialUbiEditComponent } from '../material-ubi-edit/material-ubi-edit.component';

@Component({
  selector: 'app-material-ubi-list',
  templateUrl: './material-ubi-list.component.html',
  styleUrls: ['./material-ubi-list.component.css']
})
export class MaterialUbiListComponent implements OnInit {
  materialUbis: MaterialUbi[] = [];
  dataSource: MatTableDataSource<MaterialUbi>;
  displayedColumns = ['material', 'ubi', 'value', 'options'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private materialUbiService: MaterialUbiService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getMaterialUbis();
  }

  getMaterialUbis() {
    this.materialUbiService.getMaterialUbis()
      .subscribe((response: any) => {
        this.materialUbis = response.material_ubis;
        this.dataSource = new MatTableDataSource(this.materialUbis);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  edit(materialUbi: MaterialUbi) {
    const dialogRef = this.dialog.open(MaterialUbiEditComponent, {
      data: {
        materialUbi
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result['success']) {
        this.getMaterialUbis();
      }
    });
  }

}
