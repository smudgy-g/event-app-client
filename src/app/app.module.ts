import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewEventComponent } from './core/components/new-event/new-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './material.module';
import { NewRegistrationFormComponent } from './core/components/new-registration-form/new-registration-form.component';
import { DynamicFormComponent } from './core/components/dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './core/components/dynamic-question/dynamic-question.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewEventComponent,
    NewRegistrationFormComponent,
    DynamicFormComponent,
    DynamicQuestionComponent,
    RegistrationComponent
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
