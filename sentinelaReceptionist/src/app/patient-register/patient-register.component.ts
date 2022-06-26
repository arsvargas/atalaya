import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  patientForm: FormGroup;
 
  constructor(fb: FormBuilder, private formBuilder: FormBuilder) {   this.patientForm = fb.group({
    dob: ["", Validators.required],

    this:this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      cpf: ['', Validators.required]
    })
  });}

  ngOnInit(): void {    
  }

  post() {
    if (!this.patientForm.valid) {
      console.log("Formulário invalido!");
      return;
    }
    console.log("Formulário válido!", this.patientForm.value);
  }

}
