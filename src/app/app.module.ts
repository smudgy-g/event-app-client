import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewEventComponent } from './new-event/new-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './material.module';
import { NewRegistrationFormComponent } from './new-registration-form/new-registration-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewEventComponent,
    NewRegistrationFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
