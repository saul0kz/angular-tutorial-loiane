
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDrivenComponent } from './data-driven/data-driven.component';


const APP_ROUTES: Routes = [
  {
    path: '',
    component: DataDrivenComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class DataDrivenRoutingModule {}
