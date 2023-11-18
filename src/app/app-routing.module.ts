import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { PerfilPacienteComponent } from './pagina/perfil-paciente/perfil-paciente.component';
import { CitasPendienteMedicoComponent } from './pagina/citas-pendiente-medico/citas-pendiente-medico.component';
import { CitasHoyMedicoComponent } from './pagina/citas-hoy-medico/citas-hoy-medico.component';

export const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "agendar-cita", component: AgendarCitaComponent },
  { path: "gestion-pqrs", component: GestionPqrsComponent },
  { path: "crear-pqrs", component: CrearPqrsComponent },
  { path: "detalle-pqrs/:codigo", component: DetallePqrsComponent },
  { path: "gestion-citas", component: GestionCitasComponent },
  { path: "agendar-cita", component: AgendarCitaComponent },
  { path: "detalle-cita/:codigo", component: DetalleCitaComponent },
  { path: "perfil-paciente", component: PerfilPacienteComponent },
  { path: "citas-pendiente-medico", component: CitasPendienteMedicoComponent },
  { path: "citas-hoy-medico", component: CitasHoyMedicoComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
