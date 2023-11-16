import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendarCitaPacienteDTO } from 'src/app/modelo/agendar-cita-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { CitasPacienteDTO } from 'src/app/modelo/citas-paciente-dto';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrl: './gestion-citas.component.css'
})
export class GestionCitasComponent {

  cita: CitasPacienteDTO[];

  constructor( private citaService: CitaService ) {
      this.cita = citaService.listar();
  }

}
