import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverLocationComponent } from './driver-location/driver-location.component';

const routes: Routes = [
  {
    path: '',
    component: DriverLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverLocationRoutingModule {
}
