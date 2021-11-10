import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CompanyRegistrationComponent } from './myComponents/company-registration/company-registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _http:HttpClient,public dialog: MatDialog) {}

  ngOnInit()
  {
   // console.log(this._http.get("http://localhost/myproj/WebApi.php",{responseType: 'json'}).subscribe(d=>console.log(d)));

    //console.log(this._http.get("https://localhost:5001/weatherforecast").subscribe(d=>console.log(d)));
  }
  postData(){
    let i = "hello";
  //this._http.post("https://localhost:5001/api/Testing/create/",i).subscribe(d=>console.log(d));
  }
  openDialog() {
    const dialogRef = this.dialog.open(CompanyRegistrationComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
