import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { AboutEmployeeComponent } from './about-employee/about-employee.component';
import { SupervisionComponent } from './supervision/supervision.component';
import { RegisterPacientComponent } from './register-pacient/register-pacient.component';
import { RegisterScheduleComponent } from './register-schedule/register-schedule.component';
import { AboutPacientComponent } from './about-pacient/about-pacient.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { ChatComponent } from './chat/chat.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    RegisterEmployeeComponent,
    AboutEmployeeComponent,
    SupervisionComponent,
    RegisterPacientComponent,
    RegisterScheduleComponent,
    AboutPacientComponent,
    AboutDoctorComponent,
    ChatComponent,
    DoctorScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
