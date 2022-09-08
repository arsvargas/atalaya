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
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { RolesComponent } from './roles/roles.component';
import { HeaderMedicoComponent } from './header-doctor/header-doctor.component';
import { DoctorPanelComponent } from './doctor-panel/doctor-panel.component';
import { FooterDoctorComponent } from './footer-doctor/footer-doctor.component';
import { DoctorAboutDoctorComponent } from './doctor-about-doctor/doctor-about-doctor.component';
import { DoctorCompanyListComponent } from './doctor-company-list/doctor-company-list.component';
import { DoctorAboutDoctorDayComponent } from './doctor-about-doctor-day/doctor-about-doctor-day.component';
import { DoctorChatAlertComponent } from './doctor-chat-alert/doctor-chat-alert.component';
import { DoctorConsultationsInProgressComponent } from './doctor-consultations-in-progress/doctor-consultations-in-progress.component';
import { DoctorPatientScheduleComponent } from './doctor-patient-schedule/doctor-patient-schedule.component';
import { DoctorAboutPatientComponent } from './doctor-about-patient/doctor-about-patient.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminEmployeeManagementComponent } from './admin-employee-management/admin-employee-management.component';
import { AdminPatientManagementComponent } from './admin-patient-management/admin-patient-management.component';
import { AdminSupervisionComponent } from './admin-supervision/admin-supervision.component';
import { AdminScheduleComponent } from './admin-schedule/admin-schedule.component';
import { ReceptionistCompanyListComponent } from './receptionist-company-list/receptionist-company-list.component';
import { AdminCreatePatientComponent } from './admin-create-patient/admin-create-patient.component';
import { AdminCreateEmployeeComponent } from './admin-create-employee/admin-create-employee.component';
import { AdminCompanyListComponent } from './admin-company-list/admin-company-list.component';
import { AdminPatientScheduleComponent } from './admin-patient-schedule/admin-patient-schedule.component';
import { AdminUpdatePatientComponent } from './admin-update-patient/admin-update-patient.component';

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
    ConsultationsInProgressComponent,
    PatientUpdateComponent,
    RolesComponent,
    HeaderMedicoComponent,
    DoctorPanelComponent,
    FooterDoctorComponent,
    DoctorAboutDoctorComponent,
    DoctorCompanyListComponent,
    DoctorAboutDoctorDayComponent,
    DoctorChatAlertComponent,
    DoctorConsultationsInProgressComponent,
    DoctorPatientScheduleComponent,
    DoctorAboutPatientComponent,
    AdminHeaderComponent,
    AdminPanelComponent,
    AdminEmployeeManagementComponent,
    AdminPatientManagementComponent,
    AdminSupervisionComponent,
    AdminScheduleComponent,
    ReceptionistCompanyListComponent,
    AdminCreatePatientComponent,
    AdminCreateEmployeeComponent,
    AdminCompanyListComponent,
    AdminPatientScheduleComponent,
    AdminUpdatePatientComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    NgxPaginationModule,
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
