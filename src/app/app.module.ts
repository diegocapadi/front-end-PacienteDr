import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndicePacienteComponent } from './pacientes/indice-paciente/indice-paciente.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { IndiceDoctorComponent } from './doctores/indice-doctor/indice-doctor.component';
import { CrearDoctorComponent } from './doctores/crear-doctor/crear-doctor.component';
import { EditarPacienteComponent } from './pacientes/editar-paciente/editar-paciente.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

import { VerPacienteComponent } from './pacientes/ver-paciente/ver-paciente.component';
import { EliminarPacienteComponent } from './pacientes/eliminar-paciente/eliminar-paciente.component';
import { ListarPacientesComponent } from './pacientes/listar-pacientes/listar-pacientes.component';

import { VerDoctorComponent } from './doctores/ver-doctor/ver-doctor.component';
import { PacientesService } from './pacientes/pacientes.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    IndicePacienteComponent,
    CrearPacienteComponent,
    IndiceDoctorComponent,
    CrearDoctorComponent,
    EditarPacienteComponent,
    VerPacienteComponent,
    EliminarPacienteComponent,
    ListarPacientesComponent,
    VerDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
