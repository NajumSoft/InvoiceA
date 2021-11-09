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
   // console.log(this._http.get("http://localhost/myproj/WebApi.php",{responseType: 'json'}).subscribe(d=>console.log(d)));

    //console.log(this._http.get("https://localhost:5001/weatherforecast").subscribe(d=>console.log(d)));
  }
  postData(){
    let i = "hello";
  //this._http.post("https://localhost:5001/api/Testing/create/",i).subscribe(d=>console.log(d));
  }
}
