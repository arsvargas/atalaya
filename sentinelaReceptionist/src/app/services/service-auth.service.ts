import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const baseUrl = 'http://161.35.255.151/api';


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

}
