import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  cadastrarPaciente: any;
  cadastrarAgenda: any;
  alertaChat: any;
  pesquisarPaciente: any;
  logo:any;

  constructor(private router: Router, private authService: ServiceAuthService) { }

  ngOnInit(): void {
    this.checkLightedButton();
    this. getLogoTemp();
  }

  buttonOn(button: string): void {
    sessionStorage.setItem('lightedButton', button);

    if(button == 'cadastrarPaciente') {
      this.cadastrarPaciente = true;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
      this.pesquisarPaciente = false;
      sessionStorage.setItem('patientId', null);
      this.router.navigateByUrl("/patient-register");
    } else if (button == 'cadastrarAgenda') {
      this.cadastrarAgenda = true;
      this.cadastrarPaciente = false;
      this.alertaChat = false;
      this.pesquisarPaciente = false;
    } else if (button == 'alertaChat') {
      this.alertaChat = true;
      this.cadastrarPaciente = false;
      this.cadastrarAgenda = false;
      this.pesquisarPaciente = false;
    } else if (button == 'pesquisarPaciente') {
      this.pesquisarPaciente = true;
      this.cadastrarPaciente = false;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
    }
  }

  checkLightedButton(): void {
    var lightedButton = sessionStorage.getItem('lightedButton');

    if(lightedButton == 'cadastrarPaciente') {
      this.cadastrarPaciente = true;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
      this.pesquisarPaciente = false;
    } else if (lightedButton == 'cadastrarAgenda') {
      this.cadastrarAgenda = true;
      this.cadastrarPaciente = false;
      this.alertaChat = false;
      this.pesquisarPaciente = false;
    } else if (lightedButton == 'alertaChat') {
      this.alertaChat = true;
      this.cadastrarPaciente = false;
      this.cadastrarAgenda = false;
      this.pesquisarPaciente = false;
    } else if (lightedButton == 'pesquisarPaciente') {
      this.pesquisarPaciente = true;
      this.cadastrarPaciente = false;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
    } else {
      this.pesquisarPaciente = false;
      this.cadastrarPaciente = false;
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
