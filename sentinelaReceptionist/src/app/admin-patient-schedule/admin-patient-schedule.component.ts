import { Component, OnInit } from '@angular/core';
import { Patient } from '../receptionist-panel/patient';
import { ServiceAuthService } from '../services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-patient-schedule',
  templateUrl: './admin-patient-schedule.component.html',
  styleUrls: ['./admin-patient-schedule.component.css']
})
export class AdminPatientScheduleComponent implements OnInit {

  patient = {} as Patient;

  constructor(
    private patientService: ServiceAuthService,
    private route: Router
  ) { }

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

  deletePatient(name: any, id: any) {
    if(confirm("Tem certeza que deseja deletar a paciente " + name + "?")) {
      this.patientService.deletePatient(sessionStorage.getItem("token"), 
      sessionStorage.getItem("companyId"),id)
      .subscribe(
        data => {
          this.route.navigateByUrl('/admin-pacient-schedule');
        },
        error => {
          console.log(error);
        }
      );
      this.route.navigateByUrl('/admin-pacient-schedule');

    }
  }
  updatePatient() {
      this.route.navigateByUrl('/admin-update-patient');
  }
}
