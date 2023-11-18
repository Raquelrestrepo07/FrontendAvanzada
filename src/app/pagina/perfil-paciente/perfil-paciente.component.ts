import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioDTO } from 'src/app/modelo/registro-usuario-dto';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent {

  registroUsuarioDTO: RegistroUsuarioDTO;
  ciudades:string[];
  eps:string[];
  tipoSangre:string[];
  archivos!:FileList;

  //editarHabilitado: boolean = false;

  constructor(){
    this.registroUsuarioDTO = new RegistroUsuarioDTO();
    this.ciudades = [];
    this.cargarCiudades();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
    }

  // editarPerfil() {
  //     // Lógica para manejar la edición
  //     this.editarHabilitado = true;
  // }

  public editar(){
    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroUsuarioDTO);
      }else{
      console.log("Debe cargar una foto");
      }
    }

  private cargarCiudades(){
    this.ciudades.push("Armenia");
    this.ciudades.push("Calarcá");
    this.ciudades.push("Pereira");
    this.ciudades.push("Manizales");
    this.ciudades.push("Medellín");
    }

    private cargarEps(){
      this.eps.push("Sanitas");
      this.eps.push("Sura");
      this.eps.push("Nueva eps");
      this.eps.push("Salud total");
      }

    private cargarTipoSangre(){
      this.tipoSangre.push("O+");
      this.tipoSangre.push("A+");
      this.tipoSangre.push("A-");
      this.tipoSangre.push("AB-");
      }

    public onFileChange(event:any){
      if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
      this.archivos = event.target.files;
      }
    }

}
