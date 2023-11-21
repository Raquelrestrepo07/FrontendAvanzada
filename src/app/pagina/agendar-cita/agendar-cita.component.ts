import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from 'src/app/servicios/cita.service';
import { AgendarCitaPacienteDTO } from 'src/app/modelo/agendar-cita-paciente-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';
import { MedicoService } from 'src/app/servicios/medico.service';
import { Especialidad } from 'src/app/modelo/especialidad';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {

  agendarCitaPacienteDTO: AgendarCitaPacienteDTO;
  medicos: string[];
  alerta!:Alerta;
  especialidades: Especialidad[] = Object.values(Especialidad);
  // especialidadSeleccionada: Especialidad;


  constructor(private pacienteService: PacienteService,private medicoService: MedicoService, private clinicaService: ClinicaService, private tokenService:TokenService) {
    this.agendarCitaPacienteDTO = new AgendarCitaPacienteDTO();
    this.especialidades = [];
    this.cargarEspecialidades();
    //this.especialidadSeleccionada = Especialidad.ODONTOLOGIA; 
    this.medicos = [];
    //this.cambiarEspecialidad();

  }


  public buscarMedicos(event:any) {

    const esp = event.target.value;

     this.pacienteService.obtenerMedicosEspecialidad(esp).subscribe({
       next: data => {
         this.medicos = data.respuesta;
         },
         error: error => {
         this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
         }
         });
  
  }

  public crearCita(){
    console.log(this.agendarCitaPacienteDTO);
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

  private cargarEspecialidades() {
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
    

}