import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarErroComponent } from './mostrar-erro/mostrar-erro.component';



@NgModule({
  declarations: [FormDebugComponent, MostrarErroComponent],
  imports: [
    CommonModule
  ],
  exports: [FormDebugComponent, MostrarErroComponent]
})
export class FormDebugModule { }
