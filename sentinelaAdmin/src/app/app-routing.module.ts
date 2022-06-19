import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'register-employee', component: RegisterEmployeeComponent },
  { path: 'about-employee', component: AboutEmployeeComponent },
  { path: 'supervision', component: SupervisionComponent },
  { path: 'register-pacient', component: RegisterPacientComponent },
  { path: 'register-schedule', component: RegisterScheduleComponent },
  { path: 'about-pacient', component: AboutPacientComponent },
  { path: 'about-doctor', component: AboutDoctorComponent },
  { path: 'chat', component: ChatComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
