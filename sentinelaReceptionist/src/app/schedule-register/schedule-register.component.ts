import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/doctors.service';
import { Router } from '@angular/router';
import { Doctor } from './doctor';

@Component({
  selector: 'app-schedule-register',
  templateUrl: './schedule-register.component.html',
  styleUrls: ['./schedule-register.component.css']
})
export class ScheduleRegisterComponent implements OnInit {

  filterDoctor: string;

  listDoctors: Doctor[];

  doctor: any;
  
  pag : number = 1;
  counter : number = 10;

  constructor( private doctorService: ServiceAuthService, private  route: Router ) { 
    this.listDoctors = [];
  }

  
  ngOnInit(): void {
    this.listDoctor();
    console.log(this.listDoctor())
  }

  search(event:Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

  }

  listDoctor(): void {
    this.doctorService.listDoctors(sessionStorage.getItem("token"),sessionStorage.getItem("companyId"))
    .subscribe(
      data => {
        this.listDoctors = data;        
      },
      error => {
        console.log(error);
      }
    );
  }

  selectDoctor(doctorId: any): void {
    sessionStorage.setItem("doctorId", doctorId);
    this.route.navigateByUrl('/about-doctor');

  }

  searchDoctors(search: any): void {
    this.doctorService.searchDoctor(sessionStorage.getItem("token"),
    sessionStorage.getItem("companyId"), search)
    .subscribe(
      data => {
        this.listDoctors = data;        
      },
      error => {
        console.log(error);
      }
    );
  }

}
