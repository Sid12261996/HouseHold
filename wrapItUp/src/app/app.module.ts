import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RegisterComponent } from './components/header/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/header/login/login.component';
import {ReactiveFormsModule } from '@angular/forms'
import { UserService } from 'src/user-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IndexComponent } from './components/body/index/index.component';
import { WelcomepageComponent } from './components/body/welcomepage/welcomepage.component';
import { PopUpService } from './pop-up.service';
import { CountryService } from './country.service';
import { SecurityService } from './Security/security.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
   
    RegisterComponent,
    BodyComponent,
    LoginComponent,
    IndexComponent,
    WelcomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [UserService,HttpClientModule,HttpClient,PopUpService,CountryService,SecurityService],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent,LoginComponent]
})
export class AppModule { }
