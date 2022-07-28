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
import { AboutDoctorDayComponent } from './about-doctor-day/about-doctor-day.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { RecepcionistHeaderComponent } from './recepcionist-header/recepcionist-header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EmergencyRoomComponent } from './emergency-room/emergency-room.component';
import { ConsultationsInProgressComponent } from './consultations-in-progress/consultations-in-progress.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { RolesComponent } from './roles/roles.component';
import { HeaderMedicoComponent } from './header-doctor/header-doctor.component';
import { DoctorPanelComponent } from './doctor-panel/doctor-panel.component';
import { FooterDoctorComponent } from './footer-doctor/footer-doctor.component';
import { DoctorAboutDoctorComponent } from './doctor-about-doctor/doctor-about-doctor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'receptionist-panel', component: ReceptionistPanelComponent, canActivate:[AuthGuardService] },
  { path: 'patient-register', component: PatientRegisterComponent, canActivate:[AuthGuardService] },
  { path: 'schedule-register', component: ScheduleRegisterComponent, canActivate:[AuthGuardService] },
  { path: 'chat-alert', component: ChatAlertComponent, canActivate:[AuthGuardService] },
  { path: 'about-patient', component: AboutPatientComponent, canActivate:[AuthGuardService] },
  { path: 'doctor-schedule', component: DoctorScheduleComponent, canActivate:[AuthGuardService] },
  { path: 'patient-schedule', component: PatientScheduleComponent, canActivate:[AuthGuardService] },
  { path: 'chat', component: ChatComponent, canActivate:[AuthGuardService] },
  { path: 'patient-schedule-register', component: PatientScheduleRegisterComponent, canActivate:[AuthGuardService] },
  { path: 'header-menu', component: HeaderMenuComponent, canActivate:[AuthGuardService] },
  { path: 'footer', component: FooterComponent, canActivate:[AuthGuardService] },
  { path: 'about-doctor', component: AboutDoctorComponent, canActivate:[AuthGuardService] },
  { path: 'about-doctor-day', component: AboutDoctorDayComponent, canActivate:[AuthGuardService] },
  { path: 'company-list', component: CompanyListComponent, canActivate:[AuthGuardService] },
  { path: 'recepcionist-header', component: RecepcionistHeaderComponent, canActivate:[AuthGuardService]},
  { path: 'emergency-room', component: EmergencyRoomComponent, canActivate:[AuthGuardService]},
  { path: 'consultations-in-progress', component: ConsultationsInProgressComponent, canActivate:[AuthGuardService]},
  { path: 'patient-update', component: PatientUpdateComponent, canActivate:[AuthGuardService]},
  { path: 'roles', component: RolesComponent, canActivate:[AuthGuardService]},
  { path: 'header-medico', component: HeaderMedicoComponent, canActivate:[AuthGuardService]},
  { path: 'doctor-panel', component: DoctorPanelComponent, canActivate:[AuthGuardService]},
  { path: 'footer-doctor', component: FooterDoctorComponent, canActivate:[AuthGuardService]},
  { path: 'doctor-about-doctor', component: DoctorAboutDoctorComponent, canActivate:[AuthGuardService]},






  
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
