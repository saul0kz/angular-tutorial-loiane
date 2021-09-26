import { DataDrivenRoutingModule } from './data-driven.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenComponent } from './data-driven/data-driven.component';

@NgModule({
  declarations: [DataDrivenComponent],
  imports: [CommonModule, DataDrivenRoutingModule],
})
export class DataDrivenModule {}
