import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PqrsService } from '../../servicios/pqrs.service';
import { HistorialPQRSPacienteDTO } from 'src/app/modelo/historial-pqrs-paciente-dto';

@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrls: ['./detalle-pqrs.component.css']
})
export class DetallePqrsComponent {

  codigoPqrs: string = "";
  pqrs: HistorialPQRSPacienteDTO | undefined;

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
