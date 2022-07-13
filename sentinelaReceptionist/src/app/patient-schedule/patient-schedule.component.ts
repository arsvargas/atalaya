import { Component, OnInit } from '@angular/core';
import { Patient } from '../receptionist-panel/patient';
import { ServiceAuthService } from '../services/patients.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-schedule',
  templateUrl: './patient-schedule.component.html',
  styleUrls: ['./patient-schedule.component.css']
})
export class PatientScheduleComponent implements OnInit {

    patient = {} as Patient;

  constructor( private patientService: ServiceAuthService,
    private route: Router) {  }

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
          this.route.navigateByUrl('/receptionist-panel');
        },
        error => {
          console.log(error);
        }
      );
      this.route.navigateByUrl('/receptionist-panel');

    }
  }

}
