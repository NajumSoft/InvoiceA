import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listof-invoices',
  templateUrl: './listof-invoices.component.html',
  styleUrls: ['./listof-invoices.component.scss']
})
export class ListofInvoicesComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    console.log(this._http.get("http://localhost/myproj/WebApi.php",{responseType: 'json'}).subscribe(d=>console.log(d)));
  }

}
