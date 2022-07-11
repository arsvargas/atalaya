import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/patients.service';
import { Patient } from './patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receptionist-panel',
  templateUrl: './receptionist-panel.component.html',
  styleUrls: ['./receptionist-panel.component.css']
})



export class ReceptionistPanelComponent implements OnInit {

  listPatients: Patient[];

  patient: any;
  
  pag : number = 1;
  counter : number = 10;
 
  constructor( private patientListService: ServiceAuthService, private route: Router
    ) { 
      this.listPatients = [];

  }

  ngOnInit(): void {
    this.listPatient();
    console.log(this.listPatient());
  }

  search(event:Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

  }

  listPatient(): void {
    this.patientListService.listPatients(sessionStorage.getItem("token"),sessionStorage.getItem("companyId"))
    .subscribe(
      data => {
        this.listPatients = data;        
      },
      error => {
        console.log(error);
      }
    );
  }

  selectPatient(patientId: any): void {
    sessionStorage.setItem("patientId", patientId);
    this.route.navigateByUrl('/patient-schedule');

  }

}
