import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyRegistrationComponent } from './myComponents/company-registration/company-registration.component';

import { Dashboard01Component } from './myComponents/dashboard01/dashboard01.component';
import { FLandingPageOneComponent } from './myComponents/f-landing-page-one/f-landing-page-one.component';
import { InvoiceAComponent } from './myComponents/invoice-a/invoice-a.component';
import { ListofInvoicesComponent } from './myComponents/listof-invoices/listof-invoices.component';
import { LogInComponent } from './myComponents/log-in/log-in.component';
import { SignUpComponent } from './myComponents/sign-up/sign-up.component';

const routes: Routes = [
  {path:"dashboard",component:Dashboard01Component},
  {path:"invoceA",component:InvoiceAComponent},
  {path:"invoceA/:id",component:InvoiceAComponent},
  {path:"listofinvoices",component:ListofInvoicesComponent},
  {path:"companyRegistration",component:CompanyRegistrationComponent},
  {path:"logIn",component:LogInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"flandingpageone",component:FLandingPageOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
