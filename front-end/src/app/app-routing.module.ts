import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { CursolistComponent } from './curso/cursolist/cursolist.component';

const routes: Routes = [
  {path: 'curso', component: CursolistComponent},
  {path: 'curso/novo', component:CursoFormComponent},
  {path: 'curso/:id', component: CursoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
