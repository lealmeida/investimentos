import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { CarteiraComponent } from './carteira/carteira.component';
import { CarteiraListComponent } from './carteira/carteira-list/carteira-list.component';
import { CarteiraItemComponent } from './carteira/carteira-item/carteira-item.component';
import { CompraVendaComponent } from './compra-venda/compra-venda.component';
import { CompraVendaListComponent } from './compra-venda/compra-venda-list/compra-venda-list.component';
import { CompraVendaItemComponent } from './compra-venda/compra-venda-item/compra-venda-item.component';
import { CompraVendaEditComponent } from './compra-venda/compra-venda-edit/compra-venda-edit.component';
import { TransacaoService } from './service/transacao.service';
import { DatePipe } from '@angular/common';
import { ProventoComponent } from './provento/provento.component';
import { ProventoListComponent } from './provento/provento-list/provento-list.component';
import { ProventoEditComponent } from './provento/provento-edit/provento-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    CarteiraComponent,
    CarteiraListComponent,
    CarteiraItemComponent,
    CompraVendaComponent,
    CompraVendaListComponent,
    CompraVendaItemComponent,
    CompraVendaEditComponent,
    ProventoComponent,
    ProventoListComponent,
    ProventoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  entryComponents: [ CompraVendaEditComponent, ProventoEditComponent ],
  providers: [TransacaoService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
