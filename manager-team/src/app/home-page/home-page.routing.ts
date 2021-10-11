import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'contato', component: ContactComponent}
];

export const HomePageRoutes = RouterModule.forChild(routes);
