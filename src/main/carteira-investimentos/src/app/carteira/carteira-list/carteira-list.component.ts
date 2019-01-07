import { Component, OnInit } from '@angular/core';
import { CarteiraService } from 'src/app/service/carteira.service';
import { Ativo } from 'src/app/model/ativo';
import { CotacaoService } from 'src/app/service/cotacao.service';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-carteira-list',
  templateUrl: './carteira-list.component.html',
  styleUrls: ['./carteira-list.component.css']
})
export class CarteiraListComponent implements OnInit {

  ativos: Ativo[];
  constructor(private carteiraService: CarteiraService, private cotacaoService: CotacaoService) { }

  ngOnInit() {
    this.carteiraService.getCarteira()
      .subscribe(
        (ativos: Ativo[]) => {
          ativos.forEach((element: Ativo) => {
            this.cotacaoService.getCotacao(element)
              .subscribe(
                // map(
                  response => {
                    element.ultimoFechamento = response['Global Quote']['05. price'];
                    console.log(response['Global Quote']['05. price']);
                    console.log(element);
                  }
                // )
              );
          });
          this.ativos = ativos;
        }
      );
  }

}
