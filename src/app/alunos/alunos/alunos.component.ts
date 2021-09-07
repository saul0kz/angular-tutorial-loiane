import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  public alunos: Aluno[] = [];
  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
