import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AuthGuardGuard} from '../Security/auth-guard.guard';
import {FeedbackComponent} from './IndexModule/feedback/feedback.component';
import {ServicesOfferedComponent} from './IndexModule/services-offered/services-offered.component';
import {ServiceHistoryComponent} from './IndexModule/service-history/service-history.component';
import {StatusComponent} from './IndexModule/status/status.component';

const routes: Routes = [
  {path: 'Index', canActivate: [AuthGuardGuard], children: [
      {path: '', component: IndexComponent},
      {path: 'Services', component: ServicesOfferedComponent},
      {path: 'History', component: ServiceHistoryComponent},
      {path: 'Status', component: StatusComponent},
      {path: 'Feedback', component: FeedbackComponent},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerIndexRoutingModule { }
