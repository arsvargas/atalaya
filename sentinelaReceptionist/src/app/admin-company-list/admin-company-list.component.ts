import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';
import { company } from './company';


@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  filterCompany: string;

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
    this.adminCompanies();
  }

  setLogoTemp(img: any, companyId: any):void{
    sessionStorage.setItem("img", "../../assets/logoipsum-logo-" + img + ".svg");
    sessionStorage.setItem("companyId", companyId);
  }

  adminCompanies(): void {
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
