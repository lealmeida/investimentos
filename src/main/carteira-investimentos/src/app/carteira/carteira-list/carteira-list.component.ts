import { Component, OnInit } from '@angular/core';
import { CarteiraService } from 'src/app/service/carteira.service';
import { Ativo } from 'src/app/model/ativo';

@Component({
  selector: 'app-carteira-list',
  templateUrl: './carteira-list.component.html',
  styleUrls: ['./carteira-list.component.css']
})
export class CarteiraListComponent implements OnInit {

  ativos: Ativo[];
  constructor(private carteiraService: CarteiraService) { }

  ngOnInit() {
    this.ativos = this.carteiraService.getCarteira();
  }

}
