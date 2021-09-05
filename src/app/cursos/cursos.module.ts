import { CursosRoutingModule } from './cursos.routing.module';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';


@NgModule({
  imports: [CommonModule, CursosRoutingModule],
  declarations: [CursosComponent, CursoDetalheComponent],

  providers: [CursosService],

})
export class CursosModule { }
