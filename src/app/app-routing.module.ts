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
import { MiDiaComponent } from './pagina/mi-dia/mi-dia.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';

export const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "agendar-cita", component: AgendarCitaComponent, canActivate: [RolesGuard], data: {expectedRole: ["paciente"] }},
  { path: "gestion-pqrs", component: GestionPqrsComponent, canActivate: [RolesGuard], data: {expectedRole: ["paciente"] }},
  { path: "crear-pqrs", component: CrearPqrsComponent, canActivate: [RolesGuard], data: {expectedRole: ["paciente"] } },
  { path: "detalle-pqrs/:codigo", component: DetallePqrsComponent, canActivate: [RolesGuard], data: {expectedRole: ["paciente"] }},
  { path: "gestion-citas", component: GestionCitasComponent, canActivate: [RolesGuard], data: {expectedRole: ["paciente"] } },
  { path: "detalle-cita/:codigo", component: DetalleCitaComponent, canActivate: [RolesGuard], data: {expectedRole: ["paciente"] }},
  { path: "perfil-paciente", component: PerfilPacienteComponent, canActivate: [RolesGuard], data: {expectedRole: ["paciente"] } },
  { path: "citas-pendiente-medico", component: CitasPendienteMedicoComponent, canActivate: [RolesGuard], data: {expectedRole: ["medico"] } },
  { path: "citas-hoy-medico", component: CitasHoyMedicoComponent, canActivate: [RolesGuard], data: {expectedRole: ["medico"] } },
  { path: "mi-dia", component: MiDiaComponent, canActivate: [RolesGuard], data: {expectedRole: ["medico"] } },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
