import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CadastrarContaComponent } from './cadastrar-conta/cadastrar-conta.component';
import { ListarContaComponent } from './listar-conta/listar-conta.component';
import { DepositoContaComponent } from './deposito-conta/deposito-conta.component';
import { SaqueContaComponent } from './saque-conta/saque-conta.component';
import { TransferenciaContaComponent } from './transferencia-conta/transferencia-conta.component';


@NgModule({
  declarations: [ListarContaComponent, CadastrarContaComponent, DepositoContaComponent, SaqueContaComponent, TransferenciaContaComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideNgxMask()],
  exports: [ListarContaComponent, CadastrarContaComponent, DepositoContaComponent, SaqueContaComponent, TransferenciaContaComponent],
})
export class ContaModule { }
