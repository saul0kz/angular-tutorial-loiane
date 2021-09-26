import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const APP_ROUTES: Routes = [
  {
    path: 'curso',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard],
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then((m) => m.AlunosModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard],
  },
  {
    path: 'data-driven',
    loadChildren: () =>
      import('./data-driven/data-driven.module').then((m) => m.DataDrivenModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard],
  },
  {
    path: 'template-driven',
    loadChildren: () =>
      import('./template-driven/template-driven.module').then((m) => m.TemplateDrivenModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard],
  },
  { path: '', component: LoginComponent },
  { path: 'nao-encontrado', component: NaoEncontradoComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
