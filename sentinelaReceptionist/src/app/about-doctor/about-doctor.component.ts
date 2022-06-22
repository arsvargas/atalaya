import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-doctor',
  templateUrl: './about-doctor.component.html',
  styleUrls: ['./about-doctor.component.css']
})
export class AboutDoctorComponent implements OnInit {

  daysQuantity: any;
  counter: any={};


  constructor() { }

  ngOnInit(): void {
    this.calcDays();
    this.setCounterLength();
  }

  calcDays(): void {
    var actualDate = new Date();   
    var month  = actualDate.getMonth() + 1; 
    var year = actualDate.getFullYear();
    
    this.daysQuantity = new Date(year, month, 0).getDate();  
  }

  setCounterLength(): void {
    this.counter = new Array(this.daysQuantity);
  }
}
