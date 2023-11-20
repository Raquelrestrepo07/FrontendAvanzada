import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from 'src/app/servicios/cita.service';
import { AgendarCitaPacienteDTO } from 'src/app/modelo/agendar-cita-paciente-dto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { Alerta } from 'src/app/modelo/alerta';
import { ClinicaService } from 'src/app/servicios/clinica.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {

  agendarCitaPacienteDTO: AgendarCitaPacienteDTO;
  especialidades:string[];
  medicos:string[];
  alerta!: Alerta;
  


  constructor(private citaService: CitaService, private pacienteService: PacienteService, private clinicaService: ClinicaService) {
    this.agendarCitaPacienteDTO = new AgendarCitaPacienteDTO();
    this.especialidades = [];
    this.cargarEspecialidades();
    this.medicos = [];
    this.cargarMedicos();

  }

  public agendarCita(){
  
    this.pacienteService.AgendarCita(this.agendarCitaPacienteDTO).subscribe({
      next: data => {
      this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
      this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
      });
    }

  public seleccionar(codigoCita:number){
    this.agendarCitaPacienteDTO.codigo = codigoCita;
  }

  private cargarEspecialidades(){
    this.clinicaService.listarEspecialidades().subscribe({
      next: data => {
      this.especialidades = data.respuesta;
      console.log(data.respuesta);
      },
      error: error => {
      console.log(error);
      }
      });
    }

    private cargarMedicos(){
      this.medicos.push("raquel");
      this.medicos.push("juan");
      this.medicos.push("johan");
      }

}
