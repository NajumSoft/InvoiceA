import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceAComponent } from './invoice-a/invoice-a.component';

const routes: Routes = [
  {path:"Home",component:AppComponent},
  {path:"invoceA",component:InvoiceAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
