import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  // private url = '/investimentos/ativo';
  private url = 'http://localhost:8080/investimentos/ativo';

  constructor(private http: HttpClient) { }

  getCarteira() {
    return this.http.get(this.url);
  }
}
