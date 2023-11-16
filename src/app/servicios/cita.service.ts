import { Injectable } from '@angular/core';
import { CitasPacienteDTO } from '../modelo/citas-paciente-dto';
import { AgendarCitaPacienteDTO } from '../modelo/agendar-cita-paciente-dto';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  cita: CitasPacienteDTO[];

  constructor() {

    this.cita = [];

    this.cita.push({ codigoCita: 1, fechaCreacion:'2023-10-12', fechaCita: '2023-10-15', medico: 'raquel', especialidad: 'Médico general', motivoCita: 'Mareos', estado: 'Cita En Espera' });
    this.cita.push({ codigoCita: 2, fechaCreacion:'2023-10-13', fechaCita: '2023-10-16', medico: 'juan', especialidad: 'Médico general', motivoCita: 'Malestar general', estado: 'Cita En Espera' });
    this.cita.push({ codigoCita: 3, fechaCreacion:'2023-10-14', fechaCita: '2023-10-17', medico: 'johan', especialidad: 'Médico general', motivoCita: 'Fractura', estado: 'Cita En Espera' });
    this.cita.push({ codigoCita: 4, fechaCreacion:'2023-10-15', fechaCita: '2023-10-18', medico: 'raquel', especialidad: 'Médico general', motivoCita: 'Control', estado: 'Cita En Espera'});
  }

  public listar(): CitasPacienteDTO[] {
      return this.cita;
  }

  public obtener(codigo: number): CitasPacienteDTO | undefined{
      return this.cita.find(cita => cita.codigoCita == codigo);
  }

  public crear(cita: AgendarCitaPacienteDTO){
      let codigo = this.cita.length + 1;
      this.cita.push({ codigoCita: codigo, fechaCreacion: new Date().toISOString(), fechaCita: cita.fecha,
       medico: cita.medico, especialidad: cita.especialidad, motivoCita: cita.motivoCita, estado: 'Cita En Espera' });
  }

}
