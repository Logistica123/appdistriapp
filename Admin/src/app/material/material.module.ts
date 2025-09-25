import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CdkTableModule} from '@angular/cdk/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CdkTableModule,

    MatAutocompleteModule,

    MatButtonModule,

    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,

    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,

    DragDropModule,

    MatExpansionModule,

    MatIconModule,
    MatInputModule,

    MatListModule,

    MatNativeDateModule,

    MatMenuModule,

    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,

    MatRadioModule,
    MatRippleModule,

    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,

    MatTableModule,
    MatTabsModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
