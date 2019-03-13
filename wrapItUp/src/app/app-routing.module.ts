import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { RegisterComponent } from './components/header/register/register.component';

const routes: Routes = [
  {
    path :'register' ,component: RegisterComponent
  },
  { path: '', component: BodyComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
