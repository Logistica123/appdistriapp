import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadedDocumentService } from '../../../services/uploaded-document.service';
import { UploadedDocument } from '../../../models/UploadedDocument';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { _isNumberValue } from '@angular/cdk/coercion';
import { UploadedDocumentDetailComponent } from '../uploaded-document-detail/uploaded-document-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr);

@Component({
  selector: 'app-uploaded-document-list',
  templateUrl: './uploaded-document-list.component.html',
  styleUrls: ['./uploaded-document-list.component.css']
})
export class UploadedDocumentListComponent implements OnInit {
  uploadedDocuments: UploadedDocument[] = [];
  dataSource: MatTableDataSource<UploadedDocument>;
  displayedColumns = [
    'id', 'driver.full_name', 'document.name', 'document.document_type.type',
    'created_at', 'options'
  ];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private uploadedDocumentService: UploadedDocumentService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.getUploadedDocuments();
  }

  getUploadedDocuments() {
    this.uploadedDocumentService.getUploadedDocuments()
      .subscribe((response: any) => {
        this.uploadedDocuments = response.uploaded_documents;
        this.dataSource = new MatTableDataSource(this.uploadedDocuments);
        this.dataSource.paginator = this.paginator;
        this.setSortingDataAccessor();
        this.setDataFilterPredicate();
      }, error => {

      }, () => {

      });
  }

  viewUploadedDocumentDetail(uploadedDocument: UploadedDocument) {
    console.log(uploadedDocument);
    console.log(uploadedDocument.document_files);
    const dialogRef = this.dialog.open(UploadedDocumentDetailComponent, {
      data: {
        documentFiles: uploadedDocument.document_files
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
    this.dataSource.filterPredicate = (uploadedDocument: UploadedDocument, filter: string) => {
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

      return listAsFlatString(uploadedDocument).includes(transformedFilter);
    };
  }

}
