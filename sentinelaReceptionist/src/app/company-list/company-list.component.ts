import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setLogoTemp(img: any):void{
    localStorage.setItem("img", "../../assets/logoipsum-logo-" + img + ".svg");
  }

}
