import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostComponent } from './components/lista-post/lista-post.component';


const routes: Routes = [
  { path: 'posts', component: ListaPostComponent },
  { path: 'blog', component: FormularioComponent },
  { path: 'blog/new', component: FormularioComponent },
  { path: '**', redirectTo: '/posts' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
