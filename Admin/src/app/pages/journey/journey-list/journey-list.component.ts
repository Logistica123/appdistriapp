import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../../../models/Order';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrderService } from '../../../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { _isNumberValue } from '@angular/cdk/coercion';
import { JourneyDetailComponent } from '../journey-detail/journey-detail.component';
import { FormControl } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css']
})
export class JourneyListComponent implements OnInit {
  orders: Order[] = [];
  dataSource: MatTableDataSource<Order>;
  displayedColumns = ['driver.full_name', 'location.name', 'status_es', 'created_at', 'options'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  startDateFC = new FormControl();
  endDateFC = new FormControl();

  constructor(private orderService: OrderService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders('journey')
      .subscribe((response: any) => {
        this.orders = response.orders;
        this.dataSource = new MatTableDataSource(this.orders);
        this.dataSource.paginator = this.paginator;
        this.setSortingDataAccessor();
        this.setDataFilterPredicate();
      });
  }

  viewOrderDetail(order: Order) {
    const dialogRef = this.dialog.open(JourneyDetailComponent, {
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
    this.orderService.getOrdersByDateRange('journey', startDate, endDate)
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
