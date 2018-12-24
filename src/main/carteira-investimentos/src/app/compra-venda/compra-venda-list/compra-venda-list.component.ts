import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompraVendaEditComponent } from '../compra-venda-edit/compra-venda-edit.component';
import { TransacaoService } from '../../service/transacao.service';
import { Transacao } from '../../model/transacao';


@Component({
  selector: 'app-compra-venda-list',
  templateUrl: './compra-venda-list.component.html',
  styleUrls: ['./compra-venda-list.component.css']
})
export class CompraVendaListComponent implements OnInit {

  // transacao: Transacao;
  transacoes: Transacao[];

  constructor(private modalService: NgbModal, private transacaoService: TransacaoService) {}

  // openWindowCustomClass(content) {
  //   this.modalService.open(content, { windowClass: 'dark-modal' });
  // }

  open() {
    this.modalService.open(CompraVendaEditComponent);
  }


  ngOnInit() {
    this.transacaoService.getTransacoes().subscribe(
      (response: Transacao[]) => {
        console.log(response);
        this.transacoes = response;
      }
    );
    this.transacaoService.transacaoAdd.subscribe(
      (transacao: Transacao) => {
        console.log(transacao);
        this.transacoes.push(transacao);
        console.log(this.transacoes);
      }
    );

    this.transacaoService.transacaoUpdate.subscribe(res => {
      this.transacoes[res.index] = res.transacao;
    });
  }

  delete(id: number, i: number) {
    console.log(id + i);
    this.transacaoService.deleteTransacao(id).subscribe(
      () => {
        this.transacoes.splice(i, 1);
        console.log('deletado');
      }
    );
  }

  update(transacao: Transacao, index: number) {
    // this.transacaoService.updateTransacao(transacao);
    // this.modalService.open(transacao);
    const modalRef = this.modalService.open(CompraVendaEditComponent);
    modalRef.componentInstance.transacao = transacao;
    modalRef.componentInstance.index = index;
  }

}
