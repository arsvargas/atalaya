import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Patient } from '../receptionist-panel/patient'; 


const baseUrl = 'https://api.segnuv.com.br/api';


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService { 

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  listPatients(token: any, companyId: any): Observable<any> {
    console.log(token);
    console.log(companyId);

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${baseUrl}/companies/${companyId}/patients`, {headers : reqHeader});
  }

  getPatients(token: any, companyId: any, patientId: any): Observable<any> {

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${baseUrl}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  }

  
  deletePatient(token: any, companyId: any, patientId: any): Observable<any> {

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.delete(`${baseUrl}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  }

  searchPatients(token: any, companyId: any, search: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${baseUrl}/companies/${companyId}/patients?search=${search}`, {headers : reqHeader});
  
  }


}