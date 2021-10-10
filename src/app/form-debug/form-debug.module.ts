import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarErroComponent } from './mostrar-erro/mostrar-erro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormDebugComponent, MostrarErroComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [FormDebugComponent, MostrarErroComponent]
})
export class FormDebugModule { }
