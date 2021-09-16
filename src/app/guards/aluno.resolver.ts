import { AlunosService } from './../alunos/alunos.service';
import { Aluno } from './../models/aluno/Aluno';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunoResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Aluno | Observable<Aluno> | Promise<Aluno> {
      let id = route.params['id'];
      console.log('resolver');
      return this.alunosService.getAlunoById(id);
  }
}
