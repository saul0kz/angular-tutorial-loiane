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
  { path: '', component: LoginComponent },
  { path: 'nao-encontrado', component: NaoEncontradoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
