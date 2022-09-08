import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { employee } from '../admin-employee-management/employee';
import { Route } from '@angular/router';


@Component({
  selector: 'app-admin-create-employee',
  templateUrl: './admin-create-employee.component.html',
  styleUrls: ['./admin-create-employee.component.css']
})
export class AdminCreateEmployeeComponent implements OnInit {

  employeeFormGroup: FormGroup;
  employee = {} as employee;

  constructor(private formBuilder: FormBuilder) { 

    this.employeeFormGroup = this.formBuilder.group({
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

}
