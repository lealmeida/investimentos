import { Injectable, EventEmitter } from '@angular/core';
import { Transacao } from '../model/transacao';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private url = 'http://localhost:8080/investimentos/transacao';
  transacaoAdd = new EventEmitter<Transacao>();
  transacaoUpdate = new EventEmitter<{transacao: Transacao, index: number}>();

  constructor(private http: HttpClient) { }

  getTransacoes() {
    return this.http.get(this.url);
  }

  deleteTransacao(id: number) {
    return this.http.delete(this.url + '/' + id );
  }

  addTransacao(transacao: Transacao) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.url, transacao, httpOptions).subscribe(
      (response: Transacao) => {
        this.transacaoAdd.emit(response);
      }
    );
  }

  updateTransacao(transacao: Transacao, index: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.url, transacao, httpOptions).subscribe(
      (response: Transacao) => {
        this.transacaoUpdate.emit({transacao: transacao, index: index});
      }
    );
  }
}
