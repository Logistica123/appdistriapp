import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ActionConfirmComponent } from './action-confirm/action-confirm.component';
import { MaterialModule } from '../material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditDriverValuesDialogComponent } from './edit-driver-values-dialog/edit-driver-values-dialog.component';

@NgModule({
  declarations: [SnackBarComponent, ActionConfirmComponent, EditDriverValuesDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  entryComponents: [
    ActionConfirmComponent,
    EditDriverValuesDialogComponent
  ],
  providers: [
    SnackBarComponent,
    ActionConfirmComponent,
    EditDriverValuesDialogComponent
  ]
})
export class SharedModule {
}
