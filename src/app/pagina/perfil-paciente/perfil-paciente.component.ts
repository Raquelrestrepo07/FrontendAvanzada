import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioDTO } from 'src/app/modelo/registro-usuario-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { Alerta } from 'src/app/modelo/alerta';
import { DetallePacienteDTO } from 'src/app/modelo/detalle-paciente-dto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent {

  detallePacienteDTO: DetallePacienteDTO;
  ciudades:string[];
  eps:string[];
  tipoSangre:string[];
  archivos!:FileList;
  alerta!: Alerta;
  contrasenia!: number;

  //editarHabilitado: boolean = false;

  constructor(private tokenService: TokenService,private pacienteService: PacienteService, private clinicaService: ClinicaService){
    this.detallePacienteDTO = new DetallePacienteDTO();
    this.detallePaciente();
    this.ciudades = [];
    this.cargarCiudades();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
    }

    public detallePaciente(){
      this.pacienteService.detallePaciente(this.tokenService.getCodigo()).subscribe({
        next: data => {
          this.detallePacienteDTO = data.respuesta;
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },        
        error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
        });

    }

    public editarPerfil(){
      this.pacienteService.editarPerfil(this.detallePacienteDTO).subscribe({
        next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },        
        error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
        });
      }

  private cargarCiudades(){
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
      this.ciudades = data.respuesta;
      console.log(data.respuesta);
      },
      error: error => {
      console.log(error);
      }
      });
    }

    private cargarEps(){
      this.clinicaService.listarEPS().subscribe({
        next: data => {
        this.eps = data.respuesta;
        console.log(data.respuesta);
        },
        error: error => {
        console.log(error);
        }
        });
      }

    private cargarTipoSangre(){
      this.clinicaService.listarTipoSangre().subscribe({
        next: data => {
        this.tipoSangre = data.respuesta;
        console.log(data.respuesta);
        },
        error: error => {
        console.log(error);
        }
        });
      }

    public onFileChange(event:any){
      if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
      this.archivos = event.target.files;
      }
    }

    public subirImagen() {

      // if (this.archivos != null && this.archivos.length > 0) {

      // const formData = new FormData();
      
      // formData.append('file', this.archivos[0]);
      // this.imagenService.subir(formData).subscribe({
      // next: data => {
      // this.registroUsuarioDTO.urlFoto = data.respuesta.url;
      // },
      // error: error => {
      // this.alerta = { mensaje: error.error, tipo: "danger" };
      // }
      // });
      // } else {
      // this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
      // }
      }

}
