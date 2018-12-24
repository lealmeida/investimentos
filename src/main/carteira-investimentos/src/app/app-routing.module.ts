import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteiraComponent } from './carteira/carteira.component';
import { CompraVendaComponent } from './compra-venda/compra-venda.component';

const routes: Routes = [
  {path: 'minha-carteira',  component: CarteiraComponent},
  {path: 'compra-venda',  component: CompraVendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
