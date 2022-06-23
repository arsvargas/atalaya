import { Component, OnInit } from '@angular/core';

const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

@Component({
  selector: 'app-about-doctor',
  templateUrl: './about-doctor.component.html',
  styleUrls: ['./about-doctor.component.css']
})
export class AboutDoctorComponent implements OnInit {


  daysQuantity: any;
  counter: any = {};
  weekDay: any;
  month: any;
  year: any;

  constructor() { }

  ngOnInit(): void {
    this.calcDays();
    this.setCounterLength();
  }

  calcDays(): void {
    var actualDate = new Date();
    this.month = actualDate.getMonth() + 1;
    this.year = actualDate.getFullYear();
    this.daysQuantity = new Date(this.year, this.month, 0).getDate();
  }

  setCounterLength(): void {
    this.counter = new Array(this.daysQuantity);
    for (var i = 1; i <= this.daysQuantity; i++) {
      this.counter[i - 1] = i;
    }
  }

  getWeekDay(day: number): any {
    var date = new Date(this.month + " " + day + ", " + this.year);
    return weekday[date.getDay()];
  }


}
