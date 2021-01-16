import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearDoctorComponent } from './doctores/crear-doctor/crear-doctor.component';
import { IndiceDoctorComponent } from './doctores/indice-doctor/indice-doctor.component';

import { VerDoctorComponent } from './doctores/ver-doctor/ver-doctor.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './pacientes/editar-paciente/editar-paciente.component';
import { EliminarPacienteComponent } from './pacientes/eliminar-paciente/eliminar-paciente.component';
import { IndicePacienteComponent } from './pacientes/indice-paciente/indice-paciente.component';
import { ListarPacientesComponent } from './pacientes/listar-pacientes/listar-pacientes.component';
import { VerPacienteComponent } from './pacientes/ver-paciente/ver-paciente.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'pacientes', component:IndicePacienteComponent},
  {path:'pacientes/crear', component:CrearPacienteComponent},
  {path:'pacientes/editar/:id', component:EditarPacienteComponent},
  {path:'pacientes/editar', component:EditarPacienteComponent},
  {path:'pacientes/eliminar', component:EliminarPacienteComponent},
  {path:'pacientes/ver', component:VerPacienteComponent},
  {path:'pacientes/listar', component:ListarPacientesComponent},
  {path:'doctores', component:IndiceDoctorComponent},
  {path:'doctores/crear', component:CrearDoctorComponent},
  {path: 'doctores/ver', component:VerDoctorComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
