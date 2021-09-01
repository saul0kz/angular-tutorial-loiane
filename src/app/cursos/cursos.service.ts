import { Curso } from './../models/curso';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [
    { nome: 'Angular', id: 1 },
    { nome: 'React', id: 2 },
    { nome: 'Vue', id: 3 },
  ];
  public getCursos(): Curso[] {
    return this.cursos;
  }
  public getCursoById(id: number) {
    const curso = this.getCursos().find((curso) => curso.id == id);
    return curso;
  }

  constructor() {}
}
