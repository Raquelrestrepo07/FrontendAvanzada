import { Injectable } from '@angular/core';
import { PQRSPacienteDTO} from '../modelo/pqrs-paciente-dto';
import { HistorialPQRSPacienteDTO } from '../modelo/historial-pqrs-paciente-dto';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

    pqrs: HistorialPQRSPacienteDTO[];

    constructor() {

      this.pqrs = [];

      this.pqrs.push({ numRadicado: 1, estado: 'ACTIVO', citaAsociada: 5, fechaCreacion:'2023-10-12' });
      this.pqrs.push({ numRadicado: 2, estado: 'ACTIVO', citaAsociada: 4, fechaCreacion: '2023-09-29' });
      this.pqrs.push({ numRadicado: 3, estado: 'CERRADO', citaAsociada:3, fechaCreacion:'2023-11-01' });
      this.pqrs.push({ numRadicado: 4, estado: 'ACTIVO', citaAsociada: 2, fechaCreacion:'2023-09-07' });
    }

    public listar(): HistorialPQRSPacienteDTO[] {
        return this.pqrs;
    }

    public obtener(codigo: number): HistorialPQRSPacienteDTO | undefined{
        return this.pqrs.find(pqrs => pqrs.numRadicado == codigo);
    }

    public crear(pqrs: PQRSPacienteDTO){
        let codigo = this.pqrs.length + 1;
        this.pqrs.push({ numRadicado: codigo, estado: 'ACTIVO', citaAsociada: codigo, fechaCreacion: new Date().toISOString() });
    }

}
