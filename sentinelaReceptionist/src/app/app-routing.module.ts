import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceptionistPanelComponent } from './receptionist-panel/receptionist-panel.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { ScheduleRegisterComponent } from './schedule-register/schedule-register.component';
import { ChatAlertComponent } from './chat-alert/chat-alert.component';
import { AboutPatientComponent } from './about-patient/about-patient.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { PatientScheduleComponent } from './patient-schedule/patient-schedule.component';
import { ChatComponent } from './chat/chat.component';
import { PatientScheduleRegisterComponent } from './patient-schedule-register/patient-schedule-register.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'receptionist-panel', component: ReceptionistPanelComponent },
  { path: 'patient-register', component: PatientRegisterComponent },
  { path: 'schedule-register', component: ScheduleRegisterComponent },
  { path: 'chat-alert', component: ChatAlertComponent },
  { path: 'about-patient', component: AboutPatientComponent },
  { path: 'doctor-schedule', component: DoctorScheduleComponent },
  { path: 'patient-schedule', component: PatientScheduleComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'patient-schedule-register', component: PatientScheduleRegisterComponent },
  { path: 'header-menu', component: HeaderMenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about-doctor', component: AboutDoctorComponent },



  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
