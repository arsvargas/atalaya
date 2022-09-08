import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceAuthService } from '../services/patients.service';
import { Patient } from '../receptionist-panel/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-patient',
  templateUrl: './admin-create-patient.component.html',
  styleUrls: ['./admin-create-patient.component.css']
})
export class AdminCreatePatientComponent implements OnInit {

  patientFormGroup: FormGroup;
  patient = {} as Patient;


  constructor(private formBuilder: FormBuilder, 
    private patientService: ServiceAuthService,
    private route: Router) { 
      this.patientFormGroup = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        CPF: ['', Validators.required],
        RG: ['', Validators.required],
        address: ['', Validators.required],
        number: ['', Validators.required],
        city: ['', Validators.required],
        date: ['', Validators.required],
        district: ['', Validators.required],
        CEP: ['', Validators.required],
        phone: ['', Validators.required],
        SUS:[],
        UF:[],
        marital_status:[],
        health_insurance_name:[],
        health_insurance_number:[],
        gender:[],
        mother_name:[],
        complement:[],
        password:[]
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

  createPatient(): void {  
    this.setPatient();
    this.patientService.createPatients(sessionStorage.getItem("token"),
      sessionStorage.getItem("companyId"), this.patient)
      
      .subscribe(
        data => {
          console.log(data);
          this.route.navigateByUrl('/receptionist-panel');
        },
        error => {
          console.log(error);
        }
      );
  }
  
  setPatient() {
    this.patient.name = this.patientFormGroup.value.name;
    this.patient.surname = this.patientFormGroup.value.surname;
    this.patient.address = this.patientFormGroup.value.address;
    this.patient.number = this.patientFormGroup.value.number;
    this.patient.complement = this.patientFormGroup.value.complement;
    this.patient.UF = this.patientFormGroup.value.UF;
    this.patient.city = this.patientFormGroup.value.city;
    this.patient.district = this.patientFormGroup.value.district;
    this.patient.CEP = this.patientFormGroup.value.CEP;
    this.patient.phone = this.patientFormGroup.value.phone;
    this.patient.CPF = this.patientFormGroup.value.CPF;
    this.patient.RG = this.patientFormGroup.value.RG;
    this.patient.SUS = this.patientFormGroup.value.SUS;
    this.patient.health_insurance_name = this.patientFormGroup.value.health_insurance_name;
    this.patient.health_insurance_number = this.patientFormGroup.value.health_insurance_number;
    this.patient.marital_status = this.patientFormGroup.value.marital_status;
    this.patient.email = this.patientFormGroup.value.email; 
    this.patient.mother_name = this.patientFormGroup.value.mother_name;
    this.patient.gender = this.patientFormGroup.value.gender;
    this.patient.password = "123456";
  }


}
