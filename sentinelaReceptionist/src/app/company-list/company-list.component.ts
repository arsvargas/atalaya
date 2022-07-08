import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: any;
  company: any;

  constructor(
    private companyListService: ServiceAuthService
  ) { }

  ngOnInit(): void {
  }

  setLogoTemp(img: any):void{
    localStorage.setItem("img", "../../assets/logoipsum-logo-" + img + ".svg");
  }

  listCompany(): void {
    console.log(sessionStorage.getItem("token"));
    this.companyListService.listCompanies(sessionStorage.getItem("token"))
    .subscribe(
      data => {
        console.log(data);
        this.companies = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
