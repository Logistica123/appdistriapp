import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Action } from '../../../models/Action';
import { ActionService } from '../../../services/action.service';
import { ActionFormComponent } from '../action-form/action-form.component';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
  actions: Action[] = [];
  dataSource: MatTableDataSource<Action>;
  displayedColumns = ['name_es', 'credits', 'description', 'options'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private actionService: ActionService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getActions();
  }

  getActions() {
    console.log('getting actions');
    this.actionService.getActions()
      .subscribe((response: any) => {
        this.actions = response.actions;
        this.dataSource = new MatTableDataSource(this.actions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  editActionCredits(action: Action) {
    const dialogRef = this.dialog.open(ActionFormComponent, {
      data: {
        action
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result['success']) {
        this.getActions();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
