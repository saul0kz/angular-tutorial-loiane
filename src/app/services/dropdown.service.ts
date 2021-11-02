import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor() {}

  getCargos() {
    return of([
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev senior' },
    ]);
  }

  getFrameworks () {
    return ['Angular', 'React', 'Vue'];

  }

  getNewsLetterOp() {
    return of([
      { nome: 'Sim', valor: 1 },
      { nome: 'Não', valor: 2 },
      { nome: 'Talvez', valor: 3 },
    ]);
  }
}
