import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { company } from '../company-list/company';

const baseUrl = 'https://api.segnuv.com.br/api';


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService { 

  constructor(private http: HttpClient,
    private router: Router
  ) { }


  login(loginUser:any): Observable<any> {

    console.log(loginUser);

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json'
   });
   return this.http.post(`${baseUrl}/auth/login`, loginUser);       
  }

  logOut(token: any): Observable<any>  {
    var reqHeader = new HttpHeaders({ 
      'Authorization':"Bearer " + token
   });
   return this.http.delete(`${baseUrl}/auth/logout`, {headers : reqHeader});     
  }


  listCompanies(token: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<company>(`${baseUrl}/companies/`, {headers : reqHeader});
  }

  doctorCompanies(token: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get(`${baseUrl}/companies/me/doctor?search={{search?}}`, {headers : reqHeader});
  }

  receptionistCompanies(token: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get(`${baseUrl}/companies/me/receptionist?search={{search?}}`, {headers : reqHeader});
  }


}
