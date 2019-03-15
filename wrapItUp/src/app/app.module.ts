import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LanguageComponent } from './components/header/language/language.component';
import { FontSizeComponent } from './components/header/font-size/font-size.component';
import { RegisterComponent } from './components/header/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/header/login/login.component';
import {ReactiveFormsModule } from '@angular/forms'
import { UserService } from 'src/user-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LanguageComponent,
    FontSizeComponent,
    RegisterComponent,
    BodyComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule   
  ],
  providers: [UserService,HttpClientModule,HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent,LoginComponent]
})
export class AppModule { }
