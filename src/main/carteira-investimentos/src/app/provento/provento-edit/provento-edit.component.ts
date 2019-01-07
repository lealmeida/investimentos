import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Provento } from 'src/app/model/provento';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProventoService } from 'src/app/service/provento.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-provento-edit',
  templateUrl: './provento-edit.component.html',
  styleUrls: ['./provento-edit.component.css']
})
export class ProventoEditComponent implements OnInit {

  model;
  registroForm: FormGroup;
  editMode = false;
  @Input() provento: Provento;
  @Input() index: number;
  registro: Provento = null;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private proventoService: ProventoService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    if ( this.provento ) {
      const date  = new Date(this.provento.data);
      this.model = { day: date.getUTCDay(), month: date.getUTCMonth(), year: date.getUTCFullYear()};
      this.editMode = true;
      this.registroForm = this.fb.group(
        {
          'ativo': this.fb.control(this.provento.ativo, Validators.required),
          'data': this.fb.control(this.model, Validators.required),
          'valor': this.fb.control(this.provento.valor, Validators.required),
          'tipo': this.fb.control(this.provento.tipo, Validators.required),
        }
      );
    } else {
      this.registroForm = this.fb.group(
        {
          'ativo': this.fb.control(null, Validators.required),
          'data': this.fb.control(null, Validators.required),
          'valor': this.fb.control(null, Validators.required),
          'tipo': this.fb.control(null, Validators.required)
        }
      );
    }
  }

  registrar() {
    const data = new Date(this.model.year, this.model.month - 1, this.model.day);
    const dataFormatada = this.datePipe.transform(data, 'yyyy-MM-dd');
    this.registro = new Provento();
    this.registro.ativo = this.registroForm.get('ativo').value;
    this.registro.data = dataFormatada;
    this.registro.valor = this.registroForm.get('valor').value;
    this.registro.tipo = this.registroForm.get('tipo').value;
    console.log('this.registro');
    if (this.editMode) {
      this.registro.id = this.provento.id;
      // this.transacaoService.updateTransacao(this.registro, this.index);
    } else {
      console.log(this.registro);
      this.proventoService.addProvento(this.registro);
    }
  }

}
