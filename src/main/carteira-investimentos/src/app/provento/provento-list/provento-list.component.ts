import { Component, OnInit } from '@angular/core';
import { Provento } from 'src/app/model/provento';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProventoService } from 'src/app/service/provento.service';
import { ProventoEditComponent } from '../provento-edit/provento-edit.component';

@Component({
  selector: 'app-provento-list',
  templateUrl: './provento-list.component.html',
  styleUrls: ['./provento-list.component.css']
})
export class ProventoListComponent implements OnInit {

  proventos: Provento[];

  constructor(private modalService: NgbModal, private proventoService: ProventoService) { }

  ngOnInit() {
    this.proventoService.getProventos().subscribe(
      (response: Provento[]) => {
        console.log('proventos response');
        this.proventos = response;
        console.log(response);
      }
    );

    this.proventoService.proventoAdd.subscribe(
      (provento: Provento) => this.proventos.push(provento)
    );
  }

  open() {
    this.modalService.open(ProventoEditComponent);
  }

}
