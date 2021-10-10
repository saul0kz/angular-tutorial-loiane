import { DataDrivenRoutingModule } from './data-driven.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugModule } from '../form-debug/form-debug.module';

@NgModule({
  declarations: [DataDrivenComponent],
  imports: [CommonModule, DataDrivenRoutingModule, FormsModule, ReactiveFormsModule, FormDebugModule],
})
export class DataDrivenModule {}
