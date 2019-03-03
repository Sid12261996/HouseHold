import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {RegisterComponent} from './components/header/register/register.component';
import {LoginComponent} from './components/header/login/login.component';
import {WelcomepageComponent} from './components/body/welcomepage/welcomepage.component';
import {AuthGuardGuard} from './Security/auth-guard.guard';
import {ProfileComponent} from './components/body/profile/profile.component';

const routes: Routes = [
  {path: 'Index', component: IndexComponent, canActivate: [AuthGuardGuard], outlet: 'body'},
  {path: 'register', component: RegisterComponent},
  {path: 'log-in', component: LoginComponent},
  {path: '', component: WelcomepageComponent, outlet: 'body'},
  {path: 'Profile', component: ProfileComponent, canActivate: [AuthGuardGuard], outlet: 'body'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}