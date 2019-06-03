import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './customer-index/index/index.component';
import {RegisterComponent} from './components/header/register/register.component';
import {LoginComponent} from './components/header/login/login.component';
import {WelcomepageComponent} from './components/body/welcomepage/welcomepage.component';
import {AuthGuardGuard} from './Security/auth-guard.guard';
import {ProfileComponent} from './components/body/profile/profile.component';
import {ServicesOfferedComponent} from './customer-index/IndexModule/services-offered/services-offered.component';
import {ServiceHistoryComponent} from './customer-index/IndexModule/service-history/service-history.component';
import {StatusComponent} from './customer-index/IndexModule/status/status.component';
import {FeedbackComponent} from './customer-index/IndexModule/feedback/feedback.component';

const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'log-in', component: LoginComponent},

  {path: 'Profile', component: ProfileComponent, canActivate: [AuthGuardGuard]},

  {path: '', component: WelcomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
