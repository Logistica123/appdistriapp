import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {JourneyDetailPageRoutingModule} from './journey-detail-routing.module';

import {JourneyDetailPage} from './journey-detail.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JourneyDetailPage]
})
export class JourneyDetailPageModule {
}
