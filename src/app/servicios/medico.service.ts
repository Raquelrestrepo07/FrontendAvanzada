import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private usuarioURL = "http://localhost:8080/api/medicos";
  
  constructor(private http: HttpClient) { }

  public listarHistorialCitas(): Observable<MensajeDTO> {
  return this.http.get<MensajeDTO>(`${this.usuarioURL}/listarHistorialCitas/`);
  }
}
  

