import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceAComponent } from './invoice-a/invoice-a.component';
import { Dashboard01Component } from './myComponents/dashboard01/dashboard01.component';
import { ListofInvoicesComponent } from './myComponents/listof-invoices/listof-invoices.component';

const routes: Routes = [
  {path:"dashboard",component:Dashboard01Component},
  {path:"invoceA",component:InvoiceAComponent},
  {path:"listofinvoices",component:ListofInvoicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
