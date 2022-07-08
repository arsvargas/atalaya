import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-recepcionist-header',
  templateUrl: './recepcionist-header.component.html',
  styleUrls: ['./recepcionist-header.component.css']
})
export class RecepcionistHeaderComponent implements OnInit {

  name:any;

  constructor(private http: HttpClient, private router: Router, private authService: ServiceAuthService) {
    this.getEmail(); 
  }


  ngOnInit(): void {
  }

  getEmail():void {
    this.name = sessionStorage.getItem("name");
  }

  logOut() {
    this.authService.logOut(sessionStorage.getItem("token"))
    .subscribe(() => console.log('LogOut successfully'));

    sessionStorage.clear();
    this.router.navigate(['home']);
  }

}
