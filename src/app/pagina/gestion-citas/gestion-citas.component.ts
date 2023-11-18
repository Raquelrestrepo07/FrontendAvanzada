import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from 'src/app/servicios/cita.service';
import { CitasPacienteDTO } from 'src/app/modelo/citas-paciente-dto';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent {

  cita: CitasPacienteDTO[];

  constructor( private citaService: CitaService ) {
      this.cita = citaService.listar();
  }

}
