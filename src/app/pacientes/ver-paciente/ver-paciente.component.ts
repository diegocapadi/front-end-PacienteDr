import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pacienteDTO } from '../paciente';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-ver-paciente',
  templateUrl: './ver-paciente.component.html',
  styleUrls: ['./ver-paciente.component.css']
})
export class VerPacienteComponent implements OnInit {
  formVerPac:FormGroup;
  constructor(private pacSvc:PacientesService, private formBuilderVerPac:FormBuilder) { }
  pid:number;
  paciente:pacienteDTO;
  ngOnInit(): void {
    this.formVerPac=this.formBuilderVerPac.group({
      id:['',[Validators.required, Validators.pattern("[0-9]{1,9}")]],
    });
    // this.formDr=this.formBuilder.group({
      
    //   nombre:['', [Validators.required, Validators.pattern("^[a-zA-Z-\\s\\ñ\\á\\é\\í\\ó\\ú]{1,90}$")]],
    //this.pacSvc.getPacientes().subscribe(ps=>this.pacientes=ps, e=>console.error(e));
    //this.pacSvc.getPacienteById(this.pid).subscribe(p=>this.paciente=p,e=>console.error(e));
  }

  buscarPaciente(id:any){
    //this.pacSvc.getPacientes().subscribe(ps=>this.pacientes=ps, e=>console.error(e));
    this.pacSvc.getPacienteById(id).subscribe(p=>this.paciente=p,e=>console.error(e));
  }

}
