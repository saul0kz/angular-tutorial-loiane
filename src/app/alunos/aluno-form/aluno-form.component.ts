import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-can-deactivate';
import { Aluno } from 'src/app/models/aluno/Aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService
  ) {}
  podeDesativar(): boolean {
    return confirm('Pode mudar rota?');
  }

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
