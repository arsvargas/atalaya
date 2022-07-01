import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any;
  email:any;
  password: any;
  roles: any = {};

  constructor(private authService: ServiceAuthService, private route: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    const loginUser = {
      email: this.email,
      password: this.password,
      device_name: "Web"
    };
    this.authService.login(loginUser)
      .subscribe(
        response => {
          if (this.checkRecepcionistRole(response)) {
            sessionStorage.setItem("logged", response.success);
            sessionStorage.setItem("name", response.user.name);
            this.route.navigateByUrl('/company-list');
          } else {
            alert('Seu usuário não está cadastrado como recepcionista, por favor entre em contato com a administração.')
          }
        },
        error => {
          console.log(error);
          alert('Acesso Negado!')
        }
      );
  }

  private checkRecepcionistRole(response: any): boolean {
    this.roles = response.user.roles;
    let isRole: boolean;
    isRole = false;
    this.roles.forEach((element: any) => {
      if ("receptionist" ==
       element.name) {
        isRole = true;
      }
    });
    return isRole;
  }


  loginf(): void {
    sessionStorage.setItem("logged", "true");
    this.route.navigateByUrl('/company-list');
  }

}
