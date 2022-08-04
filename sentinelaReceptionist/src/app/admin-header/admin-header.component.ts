import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  gestaoDePacientes: any;
  cadastrarAgenda: any;
  alertaChat: any;
  gestaoDeFuncionarios: any;
  logo:any;
  role:any;

  constructor(private router: Router, private authService: ServiceAuthService) { }

  ngOnInit(): void {
    this.checkLightedButton();
    this. getLogoTemp();
    this.role = sessionStorage.getItem("role");
  }

  buttonOn(button: string): void {
    sessionStorage.setItem('lightedButton', button);

    if(button == 'gestaoDePacientes') {
      this.gestaoDePacientes = true;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
      this.gestaoDeFuncionarios = false;
      sessionStorage.setItem('patientId', null);
      this.router.navigateByUrl("/patient-register");
    } else if (button == 'cadastrarAgenda') {
      this.cadastrarAgenda = true;
      this.gestaoDePacientes = false;
      this.alertaChat = false;
      this.gestaoDeFuncionarios = false;
    } else if (button == 'alertaChat') {
      this.alertaChat = true;
      this.gestaoDePacientes = false;
      this.cadastrarAgenda = false;
      this.gestaoDeFuncionarios = false;
    } else if (button == 'gestaoDeFuncionarios') {
      this.gestaoDeFuncionarios = true;
      this.gestaoDePacientes = false;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
    }
  }

  checkLightedButton(): void {
    var lightedButton = sessionStorage.getItem('lightedButton');

    if(lightedButton == 'gestaoDePacientes') {
      this.gestaoDePacientes = true;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
      this.gestaoDeFuncionarios = false;
    } else if (lightedButton == 'cadastrarAgenda') {
      this.cadastrarAgenda = true;
      this.gestaoDePacientes = false;
      this.alertaChat = false;
      this.gestaoDeFuncionarios = false;
    } else if (lightedButton == 'alertaChat') {
      this.alertaChat = true;
      this.gestaoDePacientes = false;
      this.cadastrarAgenda = false;
      this.gestaoDeFuncionarios = false;
    } else if (lightedButton == 'gestaoDeFuncionarios') {
      this.gestaoDeFuncionarios = true;
      this.gestaoDePacientes = false;
      this.cadastrarAgenda = false;
      this.alertaChat = false;
    } else {
      this.gestaoDeFuncionarios = false;
      this.gestaoDePacientes = false;
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
