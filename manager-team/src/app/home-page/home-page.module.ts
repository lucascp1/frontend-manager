import { HomePageRoutes } from './home-page.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutes
  ],
  declarations: [
    HomePageComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
   ]
})
export class HomePageModule { }
