import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './pages/cliente/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './pages/cliente/listagem-cliente/listagem-cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarContaComponent } from './pages/conta/cadastrar-conta/cadastrar-conta.component';
import { ListarContaComponent } from './pages/conta/listar-conta/listar-conta.component';
import { DepositoContaComponent } from './pages/conta/deposito-conta/deposito-conta.component';
import { SaqueContaComponent } from './pages/conta/saque-conta/saque-conta.component';
import { TransferenciaContaComponent } from './pages/conta/transferencia-conta/transferencia-conta.component';


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
    path: 'conta',
    children: [
      {
        path: 'novo',
        component: CadastrarContaComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarContaComponent
      },
      {
        path: 'lista',
        component: ListarContaComponent,
      },
      {
        path: 'deposito',
        component: DepositoContaComponent,
      },
      {
        path: 'saque',
        component: SaqueContaComponent,
      },
      {
        path: 'transferencia',
        component: TransferenciaContaComponent
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