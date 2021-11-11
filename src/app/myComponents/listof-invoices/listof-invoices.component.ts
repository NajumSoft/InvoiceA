import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-listof-invoices',
  templateUrl: './listof-invoices.component.html',
  styleUrls: ['./listof-invoices.component.scss']
})
export class ListofInvoicesComponent implements OnInit {

  constructor(private _http:HttpClient , private _router:Router) { }
  faEdit =faEdit;
  faTrashAlt = faTrashAlt; 
  data : any[] = [];
  ngOnInit(): void {
 this._http.get("http://localhost/myproj/WebApi.php",{responseType: 'json'}).subscribe(d=>{
    this.data = Object.assign(d);
    console.log(this.data);
  });
 
  }

  delete(id:number){
    //console.log(id);
    this._http.delete("http://localhost/myproj/delete.php?id="+id).subscribe(d=>{
      console.log(d);
    });
}
edit(obj:any){
//console.log(obj.Id);
 this._router.navigate(['/invoceA/'+obj.Id]);

}

}
