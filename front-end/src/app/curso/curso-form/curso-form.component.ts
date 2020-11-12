import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  curso : any = {}

  niveis : any = [
    {valor: 'Básico'},
    {valor:'Intermediário'},
    {valor: 'Avançado'}
  ]

  title : string = 'Novo Curso'

  constructor() { }

  ngOnInit(): void {
  }

}
