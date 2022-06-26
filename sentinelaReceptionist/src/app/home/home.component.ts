import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email:any;
  password:any;

  constructor(private authService: ServiceAuthService,  private route: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    const loginUser = {
      email:this.email,
      password:this.password,
      device_name:"Web"
    };
    this.authService.login(loginUser)
    .subscribe(
      response => {    
        sessionStorage.setItem("logged", response.success);    
        sessionStorage.setItem("email", this.email);
        this.route.navigateByUrl('/company-list');
      },
      error => {
        console.log(error);
        alert('Acesso Negado!')
      }
      );
  }


  loginf(): void {
    sessionStorage.setItem("logged", "true");    
       
        this.route.navigateByUrl('/company-list');
  }

}
