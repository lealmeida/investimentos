import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ativo } from '../model/ativo';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  valor: number;
  constructor(private http: HttpClient) { }

  getCotacao(ativo: Ativo) {
    return this.http.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' +
      ativo.codigo.toUpperCase() + '.SA&apikey=G2LBQYA52OW3ZO5E');
        // .subscribe(
        //   res => /* tslint:disable-next-line:no-unused-expression*/ {
        //     return ativo.ultimoFechamento = res['05. price'];
        //   }
        // );
  }
}
