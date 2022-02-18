import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button'
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ListofInvoicesComponent } from './myComponents/listof-invoices/listof-invoices.component';
import { Dashboard01Component } from './myComponents/dashboard01/dashboard01.component';
import { CompanyRegistrationComponent } from './myComponents/company-registration/company-registration.component';
import { InvoiceAComponent } from './myComponents/invoice-a/invoice-a.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LogInComponent } from './myComponents/log-in/log-in.component';
import { SignUpComponent } from './myComponents/sign-up/sign-up.component';

import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FLandingPageOneComponent } from './myComponents/f-landing-page-one/f-landing-page-one.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceAComponent,
    ListofInvoicesComponent,
    Dashboard01Component,
    CompanyRegistrationComponent,
    LogInComponent,
    SignUpComponent,
    FLandingPageOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,

    ToastrModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
