import { CursosService } from '../cursos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number = 0;
  curso: Curso | undefined = undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {}

  subscription: Subscription = this.route.params.subscribe((params: Params) => {
    this.id = params.id;
    this.curso = this.cursoService.getCursoById(this.id);
    if (!this.curso) {
      this.router.navigate(['/nao-encontrado']);
    }
  });

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
