import { Component } from '@angular/core';
import { CitasMedicoService } from 'src/app/servicios/citas-medico.service';
import { CitaMedicoDTO } from 'src/app/modelo/cita-medico-dto';
import { MedicoService } from 'src/app/servicios/medico.service';

@Component({
  selector: 'app-citas-pendiente-medico',
  templateUrl: './citas-pendiente-medico.component.html',
  styleUrls: ['./citas-pendiente-medico.component.css']
})
export class CitasPendienteMedicoComponent {

  citaMedico: CitaMedicoDTO[];
  medicoService!: MedicoService;

  constructor( private citasMedicoService: CitasMedicoService ) {
    this.citaMedico = citasMedicoService.listar();
  }

   //private citas(){
  //   this.medicoService.listarHistorialCitas().subscribe({
  //     next: data => {
  //     this.ciudades = data.respuesta;
  //     console.log(data.respuesta);
  //     },
  //     error: error => {
  //     console.log(error);
  //     }
  //     });
//  }
}
