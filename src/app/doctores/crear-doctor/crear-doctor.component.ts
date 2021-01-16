import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { doctorDTO } from '../doctor';
import { DoctoresService } from '../doctores.service';

@Component({
  selector: 'app-crear-doctor',
  templateUrl: './crear-doctor.component.html',
  styleUrls: ['./crear-doctor.component.css']
})
export class CrearDoctorComponent implements OnInit{

  constructor(private router:Router, private formBuilder:FormBuilder, private drSvc: DoctoresService) { }
  formDr: FormGroup;
 
  ngOnInit(): void {
    this.formDr=this.formBuilder.group({
      
      nombre:['', [Validators.required, Validators.pattern("^[a-zA-Z-\\s\\ñ\\á\\é\\í\\ó\\ú]{1,90}$")]],
      especialidad:['',[Validators.required,Validators.pattern("^[a-zA-Z-\\s\\ñ\\á\\é\\í\\ó\\ú]{1,90}$")]],
      numCredencial:['',[Validators.required, Validators.pattern('[0-9]{1,10}')]],
      hospital:['',[Validators.pattern("^[a-zA-Z-\\s\\ñ\\á\\é\\í\\ó\\ú]{1,90}$")]]

    });
    // this.router.navigate(['/doctores/crear']);
  }
  guardarCambiosDr(){
    //this.router.navigate(['/doctores']);
    this.drSvc.PostDoctor(this.formDr.value).subscribe(()=>this.router.navigate(['/doctores']), e=>console.error(e));
    
  }
  GetErrorFieldNombre(){
    var campo=this.formDr.get('nombre');
    if (campo.hasError('required'))
      return 'El campo Nombre es requerido';
    return '';
  }

}
