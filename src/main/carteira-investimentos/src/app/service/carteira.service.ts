import { Injectable } from '@angular/core';
import { Ativo } from '../model/ativo';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  ativos: Ativo[] = [
    new Ativo('ITSA4', 'Itausa', 'Holding', 10.34, 1287, 13307.58, 13307.58, 12.60, 16216.20, 21.86, 2908.62),
    // new Ativo('TAEE11', 'Taesa', 'Energia Elétrica', 20.23, 400, 8092, 13307.58, 12.60, 16216.20, 21.86, 2908.62)
  ];

  constructor() { }

  getCarteira(): Ativo[] {
    return this.ativos;
  }
}
