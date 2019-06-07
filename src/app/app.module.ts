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
import {IndexComponent} from './customer-index/index/index.component';
import {WelcomepageComponent} from './components/body/welcomepage/welcomepage.component';
import {PopUpService} from './services/pop-up.service';
import {CountryService} from './services/country.service';
import {SecurityService} from './services/security.service';
import {AuthGuardGuard} from './Security/auth-guard.guard';
import {Router} from '@angular/router';
import {ProfileComponent} from './components/body/profile/profile.component';
import {JwtInterceptor} from './myInterceptor';
<<<<<<< HEAD
import { ServicesOfferedComponent } from './customer-index/IndexModule/services-offered/services-offered.component';
import { ServiceHistoryComponent } from './customer-index/IndexModule/service-history/service-history.component';
import { FeedbackComponent } from './customer-index/IndexModule/feedback/feedback.component';
import { StatusComponent } from './customer-index/IndexModule/status/status.component';
import  {CustomerIndexModule} from './customer-index/customer-index.module';
import {MatSelectModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
=======
import {ServicesOfferedComponent} from './customer-index/IndexModule/services-offered/services-offered.component';
import {ServiceHistoryComponent} from './customer-index/IndexModule/service-history/service-history.component';
import {FeedbackComponent} from './customer-index/IndexModule/feedback/feedback.component';
import {StatusComponent} from './customer-index/IndexModule/status/status.component';
import {CustomerIndexModule} from './customer-index/customer-index.module';
import {FooterComponent} from './components/footer/footer.component';
>>>>>>> 0b82907ff39dace569fbebfdc83bee15951928c6

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
    ServicesOfferedComponent,
    ServiceHistoryComponent,
    FeedbackComponent,
    StatusComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerIndexModule,
    MatSelectModule ,
    MatFormFieldModule,
    MatRadioModule
  ],
  providers: [UserService, HttpClientModule, HttpClient, PopUpService, CountryService, SecurityService, AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
}
