import { Component } from '@angular/core';
import { PqrsService } from '../../servicios/pqrs.service';
import { HistorialPQRSPacienteDTO } from 'src/app/modelo/historial-pqrs-paciente-dto';

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: HistorialPQRSPacienteDTO[];

  constructor( private pqrsService: PqrsService ) {
    this.pqrs = pqrsService.listar();
  }

}
