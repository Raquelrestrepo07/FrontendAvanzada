import { Injectable } from '@angular/core';
import { CitaMedicoDTO } from '../modelo/cita-medico-dto';

@Injectable({
  providedIn: 'root'
})
export class CitasMedicoService {

  citaMedico: CitaMedicoDTO[];

  constructor() {

  this.citaMedico = [];
  this.citaMedico.push({ codigo: 1,  fecha:'2023-10-12', hora: '7', nombrePaciente: 'juan'});
  this.citaMedico.push({ codigo: 2,  fecha:'2023-10-12', hora: '7', nombrePaciente: 'raquel'});
  this.citaMedico.push({ codigo: 3,  fecha:'2023-10-12', hora: '7', nombrePaciente: 'johan'});
  }

  public listar(): CitaMedicoDTO[] {
    return this.citaMedico;
  }

  public obtener(codigo: number): CitaMedicoDTO | undefined{
    return this.citaMedico.find(citaMedico => citaMedico.codigo == codigo);
  }

 // public crear(pqrs: RegistroPQRSDTO){
 // let codigo = this.citaMedico.length + 1;
 // this.citaMedico.push({ codigo: codigo, estado: 'ACTIVO', motivo: citaMedico.motivo, fecha: new Date().toISOString() });
//}
}
