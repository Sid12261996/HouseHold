import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {RegisterComponent} from './components/header/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './models/material';

import {LoginComponent} from './components/header/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from 'src/app/services/user-service.service';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {IndexComponent} from './components/index/index.component';
import {WelcomepageComponent} from './components/body/welcomepage/welcomepage.component';
import {PopUpService} from './services/pop-up.service';
import {CountryService} from './services/country.service';
import {SecurityService} from './services/security.service';
import {AuthGuardGuard} from './Security/auth-guard.guard';
import {Router} from '@angular/router';
import { ProfileComponent } from './components/body/profile/profile.component';
import {JwtInterceptor} from './myInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,

    RegisterComponent,

    LoginComponent,
    IndexComponent,
    WelcomepageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ UserService, HttpClientModule, HttpClient, PopUpService, CountryService, SecurityService, AuthGuardGuard,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
}