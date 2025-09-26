import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ToastComponent} from './toast/toast.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LocationFormComponent} from './modals/location-form/location-form.component';
import {DocumentFormComponent} from './modals/document-form/document-form.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {UpdatePhoneNumberComponent} from './modals/update-phone-number/update-phone-number.component';
import {UpdatePasswordComponent} from './modals/update-password/update-password.component';
import {DocumentImageViewComponent} from './modals/document-image-view/document-image-view.component';
import {DocumentFileImageDetailComponent} from './modals/document-file-image-detail/document-file-image-detail.component';
import {LocationMapComponent} from './modals/location-map/location-map.component';
import {DeliveryOrderMapComponent} from './modals/delivery-order-map/delivery-order-map.component';
import {EditUrbanDistributionComponent} from './modals/edit-urban-distribution/edit-urban-distribution.component';
import {ImageDetailComponent} from './modals/image-detail/image-detail.component';
import {NotDeliveredComponent} from './modals/not-delivered/not-delivered.component';
import {MapComponent} from './map/map.component';
import {DeliverOrderComponent} from './modals/deliver-order/deliver-order.component';
import {OrderDetailMapComponent} from './order-detail-map/order-detail-map.component';
import {SyncDataLoadingComponent} from './modals/sync-data-loading/sync-data-loading.component';

@NgModule({
  declarations: [
    DeliverOrderComponent,
    DeliveryOrderMapComponent,
    DocumentFormComponent,
    DocumentImageViewComponent,
    DocumentFileImageDetailComponent,
    EditUrbanDistributionComponent,
    ImageDetailComponent,
    LoadingSpinnerComponent,
    LocationFormComponent,
    LocationMapComponent,
    MapComponent,
    NotDeliveredComponent,
    OrderDetailMapComponent,
    SyncDataLoadingComponent,
    UpdatePasswordComponent,
    UpdatePhoneNumberComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    DeliveryOrderMapComponent,
    MapComponent,
    OrderDetailMapComponent,
    ToastComponent
  ],
  providers: [
    ToastComponent,
    LoadingSpinnerComponent
  ],
  entryComponents: [
    DeliveryOrderMapComponent,
    DocumentFileImageDetailComponent,
    DocumentFormComponent,
    DocumentImageViewComponent,
    EditUrbanDistributionComponent,
    ImageDetailComponent,
    LocationFormComponent,
    LocationMapComponent,
    NotDeliveredComponent,
    UpdatePasswordComponent,
    UpdatePhoneNumberComponent
  ]
})
export class ComponentsModule {
}
