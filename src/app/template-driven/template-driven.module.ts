import { FormDebugModule } from './../form-debug/form-debug.module';
import { FormsModule } from '@angular/forms';
import { templateDrivenRoutingModule } from './template-driven.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    TemplateDrivenComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    templateDrivenRoutingModule,
    FormDebugModule
  ]
})
export class TemplateDrivenModule { }
