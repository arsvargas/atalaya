import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})

export class PatientRegisterComponent implements OnInit { 

  patientFormGroup: FormGroup;
 
  constructor(private formBuilder: FormBuilder) { 
     
     this.patientFormGroup = this.formBuilder.group({  
    
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      adress: ['', Validators.required],
      city: ['', Validators.required],
      date: ['', Validators.required],
      district: ['', Validators.required],
      cep: ['', Validators.required],
      telephone: ['', Validators.required]

    });
  }

  ngOnInit(): void {    
  }

  post() {
    if (!this.patientFormGroup.valid) {
      alert("Formulário inválido!");
      return;
    }
    alert("Formulário válido!");
  }

}
