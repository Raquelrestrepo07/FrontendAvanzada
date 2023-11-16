import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ItemPQRSDTO } from '../../modelo/item-pqrsdto';
import { PqrsService } from '../../servicios/pqrs.service';

@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrl: './detalle-pqrs.component.css'
})
export class DetallePqrsComponent {

  codigoPqrs: string = "";
  pqrs: ItemPQRSDTO | undefined;

  constructor(private route:ActivatedRoute, private pqrsService: PqrsService) {
    this.route.params.subscribe( params => {
    this.codigoPqrs = params['codigo'];

       let pqrsConsultado = pqrsService.obtener(parseInt(this.codigoPqrs));

      if( pqrsConsultado != undefined ){
          this.pqrs = pqrsConsultado;
      }
    });
  }
}
