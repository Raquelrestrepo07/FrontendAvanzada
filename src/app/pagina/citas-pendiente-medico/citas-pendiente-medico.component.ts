import { Component } from '@angular/core';
import { CitasMedicoService } from 'src/app/servicios/citas-medico.service';
import { CitaMedicoDTO } from 'src/app/modelo/cita-medico-dto';

@Component({
  selector: 'app-citas-pendiente-medico',
  templateUrl: './citas-pendiente-medico.component.html',
  styleUrls: ['./citas-pendiente-medico.component.css']
})
export class CitasPendienteMedicoComponent {

  citaMedico: CitaMedicoDTO[];

  constructor( private citasMedicoService: CitasMedicoService ) {
    this.citaMedico = citasMedicoService.listar();
  }

}
