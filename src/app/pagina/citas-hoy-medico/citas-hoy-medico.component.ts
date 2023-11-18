import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasHoyMedicoDTO } from 'src/app/modelo/citas-hoy-medico-dto';
import { CitasHoyMedicoService } from 'src/app/servicios/citas-hoy-medico.service';

@Component({
  selector: 'app-citas-hoy-medico',
  templateUrl: './citas-hoy-medico.component.html',
  styleUrls: ['./citas-hoy-medico.component.css']
})
export class CitasHoyMedicoComponent {

  
  citaHoy: CitasHoyMedicoDTO[];

  constructor( private citasHoyMedicoService: CitasHoyMedicoService ) {
    this.citaHoy = citasHoyMedicoService.listar();
  }

}
