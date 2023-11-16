import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PqrsService } from '../../servicios/pqrs.service';
import { ItemPQRSDTO } from '../../modelo/item-pqrsdto';

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrl: './gestion-pqrs.component.css'
})
export class GestionPqrsComponent {

  pqrs: ItemPQRSDTO[];

  constructor( private pqrsService: PqrsService ) {
    this.pqrs = pqrsService.listar();
  }

}
