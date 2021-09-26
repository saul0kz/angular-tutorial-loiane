
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


const APP_ROUTES: Routes = [
  {
    path: '',
    component: TemplateDrivenComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class templateDrivenRoutingModule {}
