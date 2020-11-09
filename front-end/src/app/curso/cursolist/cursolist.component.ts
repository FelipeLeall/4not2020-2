import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursolist',
  templateUrl: './cursolist.component.html',
  styleUrls: ['./cursolist.component.scss']
})
export class CursolistComponent implements OnInit {

  cursos: any = []
  // Configurando quais tabelas serão exibidas
  displayedColumns: string[] = ['nome','carga_horaria','nivel','valor_curso'] 

  constructor(private cursoSrv: CursoService) { }

  async ngOnInit() {
    this.cursos = await this.cursoSrv.listar()
    console.log(this.cursos)
  }

}
