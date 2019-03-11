import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
     
      { path: 'registration', component: RegistrationComponent },
      { path: 'log-in', component:LogInComponent },
      { path: 'contact', component:ContactComponent },
      { path: 'about', component:AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

   routes: Routes[ 
    ];
 }
