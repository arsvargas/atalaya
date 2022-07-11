import { Component, OnInit } from '@angular/core';
import { Patient } from '../receptionist-panel/patient';
import { ServiceAuthService } from '../services/patients.service';


@Component({
  selector: 'app-patient-schedule',
  templateUrl: './patient-schedule.component.html',
  styleUrls: ['./patient-schedule.component.css']
})
export class PatientScheduleComponent implements OnInit {

    patient = {} as Patient;

  constructor( private patientService: ServiceAuthService
    ) {  }

  ngOnInit(): void {
    this.showPatient();
    
  }

  showPatient(): void {
    console.log(sessionStorage.getItem("patientId"));
    console.log(this.patient.name);
    this.patientService.getPatients(
    sessionStorage.getItem("token"), 
    sessionStorage.getItem("companyId"),
    sessionStorage.getItem("patientId"))

    .subscribe(
      data => {
        sessionStorage
        this.patient = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
