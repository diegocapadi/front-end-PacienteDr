import { Component, OnInit } from '@angular/core';
import { DoctoresService } from '../doctores.service';

@Component({
  selector: 'app-indice-doctor',
  templateUrl: './indice-doctor.component.html',
  styleUrls: ['./indice-doctor.component.css']
})
export class IndiceDoctorComponent implements OnInit {

  constructor(private doctorsSvc:DoctoresService) { }

  ngOnInit(): void {
    //const drs=this.doctorsSvc.getDoctores();
    //console.log(drs);
    this.doctorsSvc.getDoctores().subscribe(d=>console.log(d),e=>console.error(e));

  }

}
