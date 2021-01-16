import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { pacienteDTO } from '../paciente';
import { PacientesService } from '../pacientes.service';


@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  displayedColumns:string[]=['id','nombre','seguroSocial','codigoPostal', 'telefono', 'doctors'];
 // dataSource:pacienteDTO[];//    = DATAdie;
  constructor(private pacSvc:PacientesService) { }
  pacientes:pacienteDTO[];
  ngOnInit(): void {
    
    this.pacSvc.getPacientes().subscribe(ps=>this.pacientes=ps, e=>console.error(e));
    

  }


}
