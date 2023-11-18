import { Injectable } from '@angular/core';
import { CitasHoyMedicoDTO } from '../modelo/citas-hoy-medico-dto';

@Injectable({
  providedIn: 'root'
})
export class CitasHoyMedicoService {

  citaHoy: CitasHoyMedicoDTO[];

  constructor() {

  this.citaHoy = [];
  this.citaHoy.push({ codigo: 2, hora: '7', nombre: 'juan'});
  this.citaHoy.push({ codigo: 2, hora: '7', nombre: 'raquel'});
  this.citaHoy.push({ codigo: 3, hora: '7', nombre: 'johan'});
  }

  public listar(): CitasHoyMedicoDTO[] {
      return this.citaHoy;
  }

  public obtener(codigo: number): CitasHoyMedicoDTO | undefined{
      return this.citaHoy.find(citaHoy => citaHoy.codigo == codigo);
  }
}
