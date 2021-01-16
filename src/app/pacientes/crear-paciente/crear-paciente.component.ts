import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  constructor(private router:Router, private formBuilder:FormBuilder, private pacSvc:PacientesService) { }
  form: FormGroup;
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      //nombre:'',
      nombre:['', [Validators.required, Validators.pattern("^[a-zA-Z-\\s\\ñ\\á\\é\\í\\ó\\ú]{1,90}$")]],
      seguroSocial:['',[Validators.required,Validators.pattern('[0-9]{1,9}')]],
      codigoPostal:['',[Validators.pattern('[0-9]{1,9}')]],
      telefono:['',[Validators.pattern('[0-9]{1,9}')]],
    });

  }

  guardarCambios(){
    //this.router.navigate(['/pacientes']);
    this.pacSvc.PostPaciente(this.form.value).subscribe(()=>this.router.navigate(['/pacientes']), e=>console.error(e));

  }
  GetErrorFieldNombre(){
    var campo=this.form.get('nombre');
    if (campo.hasError('required'))
      return 'El campo Nombre es requerido';
    return '';
  }
 
  GetErrorFieldSeguroSocial(){
    var campo=this.form.get('SeguroSocial');
    if (campo.hasError('pattern'))
      return 'Solo Números';
    return '';
  }

}
