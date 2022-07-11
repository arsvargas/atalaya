import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';
import { company } from './company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  listCompanies:company[];

  pag : number = 1;
  counter : number = 10;

  company: any;

  constructor(
    private companyListService: ServiceAuthService
  ) { 
    this.listCompanies = [];
  }

  ngOnInit(): void {
    this.listCompany();
  }

  setLogoTemp(img: any, companyId: any):void{
    sessionStorage.setItem("img", "../../assets/logoipsum-logo-" + img + ".svg");
    sessionStorage.setItem("companyId", companyId);
  }

  listCompany(): void {
    console.log(sessionStorage.getItem("token"));
    this.companyListService.listCompanies(sessionStorage.getItem("token"))
    .subscribe(
      data => {
        sessionStorage
        this.listCompanies = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
