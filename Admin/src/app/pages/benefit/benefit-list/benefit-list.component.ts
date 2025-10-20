import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Benefit } from '../../../models/Benefit';
import { BenefitService } from '../../../services/benefit.service';
import { ActionConfirmComponent } from '../../../shared/action-confirm/action-confirm.component';
import { BenefitFormComponent } from '../benefit-form/benefit-form.component';

@Component({
  selector: 'app-benefit-list',
  templateUrl: './benefit-list.component.html',
  styleUrls: ['./benefit-list.component.css']
})
export class BenefitListComponent implements OnInit {
  benefits: Benefit[] = [];
  dataSource: MatTableDataSource<Benefit>;
  displayedColumns = ['preview', 'title', 'type', 'status', 'updated_at', 'options'];
  loading = false;

  search = '';
  typeFilter = 'all';
  statusFilter = 'all';

  readonly typeOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'hero', label: 'Banner Hero' },
    { value: 'highlight', label: 'Destacado' },
    { value: 'feature', label: 'Beneficio' },
    { value: 'card', label: 'Tarjeta' },
  ];

  readonly statusOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'active', label: 'Activos' },
    { value: 'inactive', label: 'Inactivos' },
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog,
              private benefitService: BenefitService) { }

  ngOnInit() {
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Items por página';
      this.paginator._intl.nextPageLabel = 'Próxima página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.lastPageLabel = 'Última página';
    }

    this.loadBenefits();
  }

  loadBenefits() {
    this.loading = true;
    this.benefitService.list().subscribe((response: any) => {
      this.benefits = response.benefits || [];
      this.updateDataSource();
      this.loading = false;
    }, () => {
      this.benefits = [];
      this.updateDataSource();
      this.loading = false;
    });
  }

  updateDataSource() {
    const filtered = this.benefits.filter(benefit => {
      const matchesType = this.typeFilter === 'all' || benefit.type === this.typeFilter;
      const matchesStatus =
        this.statusFilter === 'all' ||
        (this.statusFilter === 'active' && benefit.is_active) ||
        (this.statusFilter === 'inactive' && !benefit.is_active);

      const normalizedSearch = this.search.trim().toLowerCase();
      const matchesSearch = !normalizedSearch ||
        (benefit.title && benefit.title.toLowerCase().includes(normalizedSearch)) ||
        (benefit.subtitle && benefit.subtitle.toLowerCase().includes(normalizedSearch)) ||
        (benefit.short_description && benefit.short_description.toLowerCase().includes(normalizedSearch));

      return matchesType && matchesStatus && matchesSearch;
    });

    this.dataSource = new MatTableDataSource(filtered);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  onSearchChange(value: string) {
    this.search = value;
    this.updateDataSource();
  }

  onTypeChange(value: string) {
    this.typeFilter = value;
    this.updateDataSource();
  }

  onStatusChange(value: string) {
    this.statusFilter = value;
    this.updateDataSource();
  }

  getTypeLabel(value: string) {
    const option = this.typeOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  }

  addBenefit() {
    const dialogRef = this.dialog.open(BenefitFormComponent, {
      width: '720px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.loadBenefits();
      }
    });
  }

  editBenefit(benefit: Benefit) {
    const dialogRef = this.dialog.open(BenefitFormComponent, {
      width: '720px',
      data: {
        benefit,
        mode: 'edit'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.loadBenefits();
      }
    });
  }

  deleteBenefit(benefit: Benefit) {
    const dialogRef = this.dialog.open(ActionConfirmComponent, {
      data: {
        message: `¿Desea eliminar el beneficio "${benefit.title}"?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.benefitService.delete(benefit).subscribe(() => {
          this.loadBenefits();
        });
      }
    });
  }
}
