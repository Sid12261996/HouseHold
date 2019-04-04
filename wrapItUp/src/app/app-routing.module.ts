import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/body/index/index.component';
import { RegisterComponent } from './components/header/register/register.component';
import { LoginComponent } from './components/header/login/login.component';
import { WelcomepageComponent } from './components/body/welcomepage/welcomepage.component';

const routes: Routes = [
 {path:'index',component:IndexComponent},
  {path:'register', component:RegisterComponent},
  {path:'log-in', component:LoginComponent},
  {path: 'welcome',component:WelcomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
