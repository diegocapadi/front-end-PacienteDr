import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pacienteDTO } from './paciente';

@Injectable({
  providedIn: 'root'
})

export class PacientesService {

  constructor(private httpPac:HttpClient) { }

  public PostPaciente(pac:pacienteDTO){
    return this.httpPac.post('https://localhost:44397/api/pacientes',pac);
  }
  // public getPacientes():Observable<pacienteDTO[]>{
    public getPacientes():Observable<any>{
    //return [{id:1,nombre:"Diego Acuña",especialidad:"Traumotologia",numCredencial:100,hospital:"Universidad Hospitalaria"}];
    //return this.httpPac.get<pacienteDTO[]>('https://localhost:44397/api/pacientes');
    return this.httpPac.get('https://localhost:44397/api/pacientes/');
  }
    public getPacienteById(id:any):Observable<any>{
      //let params1=new HttpParams().set('userId',"1");
      //return this.httpPac.get('https://localhost:44397/api/pacientes/', {params:params1});
      return this.httpPac.get(`https://localhost:44397/api/pacientes/${id}`);
    }

}
