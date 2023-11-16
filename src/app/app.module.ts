import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { LoginComponent } from './pagina/login/login.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';

import { FormsModule } from '@angular/forms';
import { PerfilPacienteComponent } from './pagina/perfil-paciente/perfil-paciente.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { CitasPendienteMedicoComponent } from './pagina/citas-pendiente-medico/citas-pendiente-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    AgendarCitaComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    GestionPqrsComponent, 
    GestionCitasComponent,
    PerfilPacienteComponent,
    DetalleCitaComponent,
    CitasPendienteMedicoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
