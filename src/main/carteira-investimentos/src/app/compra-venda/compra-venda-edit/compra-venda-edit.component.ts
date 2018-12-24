import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransacaoService } from '../../service/transacao.service';
import { Transacao } from '../../model/transacao';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-compra-venda-edit',
  templateUrl: './compra-venda-edit.component.html',
  styleUrls: ['./compra-venda-edit.component.css']
})
export class CompraVendaEditComponent implements OnInit {

  model;
  registroForm: FormGroup;
  editMode = false;
  @Input() transacao: Transacao;
  @Input() index: number;
  registro: Transacao = null;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private transacaoService: TransacaoService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    if ( this.transacao ) {
      const date  = new Date(this.transacao.dataCompra);
      this.model = { day: date.getUTCDay(), month: date.getUTCMonth(), year: date.getUTCFullYear()};
      this.editMode = true;
      this.registroForm = this.fb.group(
        {
          'empresa': this.fb.control(this.transacao.empresa, Validators.required),
          'setor': this.fb.control(this.transacao.setor, Validators.required),
          'codigo': this.fb.control(this.transacao.ativo, Validators.required),
          'dataTransacao': this.fb.control(this.model, Validators.required),
          'valor': this.fb.control(this.transacao.valor, Validators.required),
          'quantidade': this.fb.control(this.transacao.quantidade, Validators.required),
          'operacao': this.fb.control(this.transacao.tipo, Validators.required)
        }
      );
    } else {
      this.registroForm = this.fb.group(
        {
          'empresa': this.fb.control(null, Validators.required),
          'setor': this.fb.control(null, Validators.required),
          'codigo': this.fb.control(null, Validators.required),
          'dataTransacao': this.fb.control(null, Validators.required),
          'valor': this.fb.control(null, Validators.required),
          'quantidade': this.fb.control(null, Validators.required),
          'operacao': this.fb.control(null, Validators.required)
        }
      );
    }
  }

  registrar() {
    const data = new Date(this.model.year, this.model.month - 1, this.model.day);
    const dataFormatada = this.datePipe.transform(data, 'yyyy-MM-dd');
    this.registro = new Transacao(
        this.registroForm.get('codigo').value,
        this.registroForm.get('empresa').value,
        this.registroForm.get('setor').value,
        dataFormatada,
        this.registroForm.get('quantidade').value,
        this.registroForm.get('valor').value,
        this.registroForm.get('operacao').value,
      );
    if (this.editMode) {
      this.registro.id = this.transacao.id;
      this.transacaoService.updateTransacao(this.registro, this.index);
    } else {
      this.transacaoService.addTransacao(this.registro);
    }
  }
}
