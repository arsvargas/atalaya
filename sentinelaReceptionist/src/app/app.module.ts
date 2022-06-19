import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReceptionistPanelComponent } from './receptionist-panel/receptionist-panel.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { ScheduleRegisterComponent } from './schedule-register/schedule-register.component';
import { ChatAlertComponent } from './chat-alert/chat-alert.component';
import { AboutPatientComponent } from './about-patient/about-patient.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { ChatComponent } from './chat/chat.component';
import { PatientScheduleComponent } from './patient-schedule/patient-schedule.component';
import { PatientScheduleRegisterComponent } from './patient-schedule-register/patient-schedule-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceptionistPanelComponent,
    PatientRegisterComponent,
    ScheduleRegisterComponent,
    ChatAlertComponent,
    AboutPatientComponent,
    DoctorScheduleComponent,
    ChatComponent,
    PatientScheduleComponent,
    PatientScheduleRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
