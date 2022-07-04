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
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BrMaskerModule } from 'br-mask';
import { FooterComponent } from './footer/footer.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { AboutDoctorDayComponent } from './about-doctor-day/about-doctor-day.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecepcionistHeaderComponent } from './recepcionist-header/recepcionist-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmergencyRoomComponent } from './emergency-room/emergency-room.component';
import { ConsultationsInProgressComponent } from './consultations-in-progress/consultations-in-progress.component';

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
    PatientScheduleRegisterComponent,
    HeaderMenuComponent,
    FooterComponent,
    AboutDoctorComponent,
    AboutDoctorDayComponent,
    CompanyListComponent,
    RecepcionistHeaderComponent,
    EmergencyRoomComponent,
    ConsultationsInProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrMaskerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
