
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoEncontradoComponent } from '../nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';


const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'nao-encontrado', component: NaoEncontradoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  exports : [
    RouterModule
  ]

})
export class CursosRoutingModule { }
