import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctorDTO } from './doctor';

@Injectable({
  //singleton
  providedIn: 'root'
})
export class DoctoresService {

  constructor(private httpDr:HttpClient) { }

  public getDoctores():Observable<doctorDTO[]>{
    //return [{id:1,nombre:"Diego Acuña",especialidad:"Traumotologia",numCredencial:100,hospital:"Universidad Hospitalaria"}];
    return this.httpDr.get<doctorDTO[]>('https://localhost:44397/api/doctores');
  }

  public PostDoctor(dr: doctorDTO){
    return this.httpDr.post('https://localhost:44397/api/doctores',dr);
  }
}
