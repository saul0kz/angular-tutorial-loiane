import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno/Aluno';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Saulo', email: 'saulo@email.com' },
    { id: 2, nome: 'Natália', email: 'saulo@email.com' },
    { id: 3, nome: 'Salah Maneh', email: 'saulo@email.com' },
  ];
  constructor() {}
  public getAlunos(): Aluno[] {
    return this.alunos;
  }
  public getAlunoById(id: number): Aluno {
    let aluno = this.alunos[id - 1];
    return aluno;
  }
}
