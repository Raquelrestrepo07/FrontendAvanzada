import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
import { DetallePacienteDTO } from '../modelo/detalle-paciente-dto';
import { PQRSPacienteDTO } from '../modelo/pqrs-paciente-dto';
import { AgendarCitaPacienteDTO } from '../modelo/agendar-cita-paciente-dto';
import { RegistroUsuarioDTO } from '../modelo/registro-usuario-dto';
import { Especialidad } from '../modelo/especialidad';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  

  private usuarioURL = "http://localhost:8080/api/pacientes";
  
  constructor(private http: HttpClient) { }

  public eliminarPerfil(codigoCuenta: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.usuarioURL}/eliminarPerfil/${codigoCuenta}`);
  }

  public editarPerfil(detallePacienteDTO: DetallePacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.usuarioURL}/editarPerfil`, detallePacienteDTO);
  }

  public crearPQRS(pqrsPacienteDTO: PQRSPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.usuarioURL}/crearPQRS`, pqrsPacienteDTO);
  }
  public ListarPQRS(): Observable<MensajeDTO> {
  return this.http.get<MensajeDTO>(`${this.usuarioURL}/listarPQRS/`);
  }

  public AgendarCita(agendarCitaPacienteDTO : AgendarCitaPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.usuarioURL}/agendarCita`, agendarCitaPacienteDTO);
  }

  public Registrarse(registroUsuarioDTO : RegistroUsuarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.usuarioURL}/registrarse`, registroUsuarioDTO);
  }

  public listarCitasPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.usuarioURL}/listarCitas/${codigoPaciente}`);
  }

  public VerDetalleCita(codigoCita: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.usuarioURL}/detalle/${codigoCita}`);
  }

  public detallePaciente(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.usuarioURL}/detallePaciente/${codigo}`);
  }

  public obtenerMedicosEspecialidad(especialidad: Especialidad): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.usuarioURL}/obtenerMedicosEspecialidad/${especialidad}`);
  }

}
