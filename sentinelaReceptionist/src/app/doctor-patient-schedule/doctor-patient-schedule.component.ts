import { Component, OnInit } from '@angular/core';
import { Patient } from '../receptionist-panel/patient';
import { ServiceAuthService } from '../services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-patient-schedule',
  templateUrl: './doctor-patient-schedule.component.html',
  styleUrls: ['./doctor-patient-schedule.component.css']
})
export class DoctorPatientScheduleComponent implements OnInit {

  patient = {} as Patient;

  constructor(private patientService: ServiceAuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.showPatient();
  }

  showPatient(): void {
    this.patientService.getPatients(
    sessionStorage.getItem("token"), 
    sessionStorage.getItem("companyId"),
    sessionStorage.getItem("patientId"))
    .subscribe(
      data => {
        this.patient = data;
      },
      error => {
        console.log(error);
      }
    );
} 

}
