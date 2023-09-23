import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './pages/cliente/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './pages/cliente/listagem-cliente/listagem-cliente.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'cliente',
    children: [
      {
        path: 'novo',
        component: CadastroClienteComponent
      },
      {
        path: 'editar/:id',
        component: CadastroClienteComponent
      },
      {
        path: 'lista',
        component: ListagemClienteComponent,
      },
    ]
  },
  {
    path: '',
    component: HomeComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }