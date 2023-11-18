import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasPacienteDTO } from 'src/app/modelo/citas-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css']
})
export class DetalleCitaComponent {

  codigoCita: string = "";
  cita: CitasPacienteDTO | undefined;

  constructor(private route:ActivatedRoute, private citaService: CitaService) {
    this.route.params.subscribe( params => {
    this.codigoCita = params['codigo'];

    let citaConsultada = citaService.obtener(parseInt(this.codigoCita));

    if( citaConsultada != undefined ){
    this.cita = citaConsultada;
    }
  });
}

}
