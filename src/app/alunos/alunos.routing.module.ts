import { AlunoDeactivateGuard } from './../guards/aluno-deactivate.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos/alunos.component';


const APP_ROUTES: Routes = [
                    {path: '', component: AlunosComponent, children : [
                      {path: 'novo', component: AlunoFormComponent},
                      {path: ':id', component: AlunoDetalheComponent},
                      {path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunoDeactivateGuard]},
                    ]},

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
export class AlunosRoutingModule { }
