import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  private url = '/investimentos/ativo';

  constructor(private http: HttpClient) { }

  getCarteira() {
    return this.http.get(this.url);
  }
}
