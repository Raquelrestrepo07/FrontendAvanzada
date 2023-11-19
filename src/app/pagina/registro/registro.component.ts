import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioDTO } from '../../modelo/registro-usuario-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Alerta } from 'src/app/modelo/alerta';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  registroUsuarioDTO: RegistroUsuarioDTO;
  ciudades:string[];
  eps:string[];
  tipoSangre:string[];
  archivos!:FileList;
  alerta!:Alerta;
  

  constructor(private imagenService: ImagenService, private authService: AuthService, private clinicaService: ClinicaService){    
    this.registroUsuarioDTO = new RegistroUsuarioDTO();
    this.ciudades = [];
    this.cargarCiudades();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
    }

  public registrar(){
  
    this.authService.registrarPaciente(this.registroUsuarioDTO).subscribe({
      next: data => {
      this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
      this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
      });

    if (this.registroUsuarioDTO.urlFoto.length != 0){
      
        }else{
        //this.alerta = { mensaje: "Debe subir una imagen", tipo: "danger" };
        }
    }

  public sonIguales():boolean{
    return this.registroUsuarioDTO.contrasenia == this.registroUsuarioDTO.confirmaContrasenia;
    }

    private cargarCiudades() {
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
        },
        error: error => {
        console.log(error);
        }
        });
      }

    public onFileChange(event:any){
      if (event.target.files.length > 0) {
        this.registroUsuarioDTO.urlFoto = event.target.files[0].name;
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
