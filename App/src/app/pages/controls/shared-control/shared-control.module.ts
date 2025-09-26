import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlAnimComponent} from '../control-anim/control-anim.component';
import {PopoverAlertComponent} from '../../../popover-alert/popover-alert.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [ControlAnimComponent, PopoverAlertComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ControlAnimComponent
  ]
})
export class SharedControlModule {
}
