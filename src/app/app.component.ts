import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _http:HttpClient) {}

  ngOnInit()
  {
    console.log(this._http.get("https://localhost:5001/weatherforecast").subscribe(d=>console.log(d)));
  }
}
