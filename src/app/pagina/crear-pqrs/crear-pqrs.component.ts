import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PQRSPacienteDTO } from 'src/app/modelo/pqrs-paciente-dto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPqrsComponent {

  pqrsPacienteDto: PQRSPacienteDTO;


  constructor(private pqrsService: PqrsService) {
    this.pqrsPacienteDto = new PQRSPacienteDTO();
  }

  public crearPqrs(){
    this.pqrsService.crear(this.pqrsPacienteDto);
  }

  public seleccionar(codigoCita:number){
    this.pqrsPacienteDto.citaAsociada = codigoCita;
  }

}
