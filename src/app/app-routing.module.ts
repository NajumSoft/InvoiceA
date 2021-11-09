import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceAComponent } from './invoice-a/invoice-a.component';
import { ListofInvoicesComponent } from './myComponents/listof-invoices/listof-invoices.component';

const routes: Routes = [
  {path:"Home",component:AppComponent},
  {path:"invoceA",component:InvoiceAComponent},
  {path:"listofinvoices",component:ListofInvoicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
