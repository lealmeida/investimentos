import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provento } from '../model/provento';

@Injectable({
  providedIn: 'root'
})
export class ProventoService {

  private url = 'http://localhost:8080/investimentos/proventos';
  proventoAdd = new EventEmitter<Provento>();

  constructor(private http: HttpClient) { }

  addProvento(provento: Provento) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.url, provento, httpOptions).subscribe(
      (response: Provento) => {
        this.proventoAdd.emit(response);
      }
    );
    this.http.post(this.url, provento);
  }

  getProventos() {
    return this.http.get(this.url);
  }
}
