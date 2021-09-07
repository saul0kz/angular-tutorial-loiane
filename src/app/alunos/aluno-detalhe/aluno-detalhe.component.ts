import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aluno } from 'src/app/models/aluno/Aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  public aluno: Aluno | undefined;
  private subscription: Subscription = this.activatedRoute.params.subscribe(
    (params) => {
      const id = Number(params.id);
      this.aluno = this.alunosService.getAlunoById(id);
    }
  );

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
