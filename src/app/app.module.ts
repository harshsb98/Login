import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './/app-routing.module';
import {Router} from '@angular/router'
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule,MatCardModule,MatButtonToggleModule,MatButtonModule,MatInputModule} from '@angular/material';
import { SsComponent } from './ss/ss.component';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    SsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
