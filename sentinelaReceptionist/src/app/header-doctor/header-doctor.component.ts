import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-header-doctor',
  templateUrl: './header-doctor.component.html',
  styleUrls: ['./header-doctor.component.css']
})
export class HeaderMedicoComponent implements OnInit {

  pesquisarPaciente: any;
  logo:any;
  cadastrarAgenda: any;
  alertaChat: any;

  constructor(private router: Router, private authService: ServiceAuthService) { }

  ngOnInit(): void {
    this.checkLightedButton();
    this. getLogoTemp();
  }

  buttonOn(button: string): void {
    sessionStorage.setItem('lightedButton', button);

     if (button == 'cadastrarAgenda') {
      this.cadastrarAgenda = true;
      this.alertaChat = false;
      this.pesquisarPaciente = false;
    } else if (button == 'alertaChat') {
      this.alertaChat = true;
      this.cadastrarAgenda = false;
      this.pesquisarPaciente = false;
    } else if (button == 'pesquisarPaciente') {
      this.pesquisarPaciente = true;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
    }
  }

  checkLightedButton(): void {
    var lightedButton = sessionStorage.getItem('lightedButton');

     if (lightedButton == 'cadastrarAgenda') {
      this.cadastrarAgenda = true;
      this.alertaChat = false;
      this.pesquisarPaciente = false;
    } else if (lightedButton == 'alertaChat') {
      this.alertaChat = true;
      this.cadastrarAgenda = false;
      this.pesquisarPaciente = false;
    } else if (lightedButton == 'pesquisarPaciente') {
      this.pesquisarPaciente = true;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
    } else {
      this.pesquisarPaciente = false;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
    }
  }

  getLogoTemp(){
    this.logo = localStorage.getItem("img");
  }

  logOut() {
    this.authService.logOut(sessionStorage.getItem("token"));
    sessionStorage.clear();
    this.router.navigate(['home']);
  }

}
