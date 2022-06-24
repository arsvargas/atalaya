import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
    console.log("logo::");

    console.log(this.logo);
  }

}
