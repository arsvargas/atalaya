import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  patientForm: FormGroup;
 
  constructor(fb: FormBuilder) {   this.patientForm = fb.group({
    dob: ["", Validators.required]
  });}

  ngOnInit(): void {    
  }

}
