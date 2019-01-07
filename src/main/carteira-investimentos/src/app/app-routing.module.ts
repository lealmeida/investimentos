import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteiraComponent } from './carteira/carteira.component';
import { CompraVendaComponent } from './compra-venda/compra-venda.component';
import { ProventoComponent } from './provento/provento.component';

const routes: Routes = [
  {path: 'minha-carteira',  component: CarteiraComponent},
  {path: 'compra-venda',  component: CompraVendaComponent},
  {path: 'proventos',  component: ProventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
