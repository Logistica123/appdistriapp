import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LocationService } from '../../../services/location.service';
import { Location } from '../../../models/Location';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { LocationDetailComponent } from '../location-detail/location-detail.component';
import { LocationUpdateRequestComponent } from '../location-update-request/location-update-request.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { LocationFormComponent } from '../location-form/location-form.component';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  dataSource: MatTableDataSource<Location>;
  displayedColumns = ['name', 'address', 'city', 'has_request', 'created_at', 'options'];
  date = new Date();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private locationService: LocationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getLocations();
    console.log(this.date);
  }

  getLocations() {
    this.locationService.getLocations()
      .subscribe((response: any) => {
        this.locations = response.locations;
        this.locations.map(location => {
          if (location.update_requests.length > 0) {
            location.has_request = 'Sí';
          } else {
            location.has_request = 'No';
          }
        });
        this.dataSource = new MatTableDataSource(this.locations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  viewLocationDetail(location: Location) {
    const dialogRef = this.dialog.open(LocationDetailComponent, {
      data: {
        location
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.getLocations();
      }
    });
  }

  edit(location: Location) {
    const dialogRef = this.dialog.open(LocationFormComponent, {
      data: {
        location
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.getLocations();
      }
    });
  }

  viewUpdateLocationRequests(location: Location) {
    const dialogRef = this.dialog.open(LocationUpdateRequestComponent, {
      data: {
        location
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.getLocations();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
