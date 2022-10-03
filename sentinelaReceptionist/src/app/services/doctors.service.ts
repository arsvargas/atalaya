import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Doctor } from '../schedule-register/doctor';  


const baseUrl = 'https://api.segnuv.com.br/api';


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService { 

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  listDoctors(token: any, companyId: any): Observable<any> {
    console.log(token);
    console.log(companyId);

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${baseUrl}/companies/${companyId}/doctors`, {headers : reqHeader});
  }

  getDoctors(token: any, companyId: any, doctorId: any): Observable<any> {

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${baseUrl}/companies/${companyId}/doctors/${doctorId}`, {headers : reqHeader});
  }

  
 // deletePatient(token: any, companyId: any, patientId: any): Observable<any> {

  //  var reqHeader = new HttpHeaders({ 
  //    'Content-Type': 'application/json',
  //    'Authorization':"Bearer " + token
  // });
  //  return this.http.delete(`${baseUrl}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  //}

  searchDoctor(token: any, companyId: any, search: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${baseUrl}/companies/${companyId}/doctors?search=${search}`, {headers : reqHeader});
  
  }

  //createPatients(token: any, companyId: any, objectPatient: any): Observable<any> {
   // var reqHeader = new HttpHeaders({ 
   //   'Content-Type': 'application/json',
   //   'Authorization':"Bearer " + token
   //});
   // return this.http.post<Patient>(`${baseUrl}/companies/${companyId}/patients`, objectPatient, {headers : reqHeader});
  //
  //}

 // updatePatient(token: any, companyId: any, patientId: any, objectPatient: any): Observable<any> {
  //  var reqHeader = new HttpHeaders({ 
  //    'Content-Type': 'application/json',
  //    'Authorization':"Bearer " + token
  // });
 //   return this.http.patch<Doctor>(`${baseUrl}/companies/${companyId}/patients/${doctorId}`, objectPatient, {headers : reqHeader});
 // }


}