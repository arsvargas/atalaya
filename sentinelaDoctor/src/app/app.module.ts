import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorPanelComponent } from './doctor-panel/doctor-panel.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutPatientComponent } from './about-patient/about-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorPanelComponent,
    ScheduleComponent,
    AboutPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
