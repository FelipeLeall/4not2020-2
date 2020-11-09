import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursolistComponent } from './curso/cursolist/cursolist.component';

const routes: Routes = [
  {path: 'curso', component: CursolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
