import { FormStepsComponent } from './form-steps/form-steps.component';
import { OnboardComponent } from './onboard/onboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cadastro', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'onboard', component: OnboardComponent },
  {path: 'formsteps', component: FormStepsComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: HomePageComponent, children: [
    {path: 'home', loadChildren: () => import('../app/home-page/home-page.module').then(m => m.HomePageModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
