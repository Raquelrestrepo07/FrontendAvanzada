import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from 'src/app/servicios/cita.service';
import { AgendarCitaPacienteDTO } from 'src/app/modelo/agendar-cita-paciente-dto';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent {

  agendarCitaPacienteDTO: AgendarCitaPacienteDTO;
  especialidades:string[];
  medicos:string[];


  constructor(private citaService: CitaService) {
    this.agendarCitaPacienteDTO = new AgendarCitaPacienteDTO();
    this.especialidades = [];
    this.cargarEspecialidades();
    this.medicos = [];
    this.cargarMedicos();

  }

  public crearCita(){
    this.citaService.crear(this.agendarCitaPacienteDTO);
  }

  public seleccionar(codigoCita:number){
    this.agendarCitaPacienteDTO.codigo = codigoCita;
  }

  private cargarEspecialidades(){
    this.especialidades.push("Dermatologo");
    this.especialidades.push("Pediatra");
    this.especialidades.push("Odontologo");
    }

    private cargarMedicos(){
      this.medicos.push("raquel");
      this.medicos.push("juan");
      this.medicos.push("johan");
      }

}
