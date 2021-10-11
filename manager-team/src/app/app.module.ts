import { FormStepsModule } from './form-steps/form-steps.module';
import { HomePageModule } from './home-page/home-page.module';
import { SharedModule } from './../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { OnboardComponent } from './onboard/onboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './service.service';

@NgModule({
  declarations: [							
    AppComponent,
    RegisterComponent,
    OnboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    SharedModule,
    ReactiveFormsModule,
    FormStepsModule,
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
