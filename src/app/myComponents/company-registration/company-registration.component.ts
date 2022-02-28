import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit {
  data = 'sai';
  imageSrc = './assets/Img/Logos/Logo-Placeholder.png';
  myfile ;
   token;
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this.getToken();
  }

  
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
  
   
      };
      this.myfile = event.target.files[0];

    };
    }
    getToken (){
        this._http.post('http://api.najumsons.com/users/authenticate',{  "username":"admin",
      "password":"NACadm1n"}).subscribe(d=>{
        this.token = d['token'];});

    }
    registerCompany(){
     var emp ={
       "Id":1,
       "name":"raz",
       "fname":"najum"
     }

      var formData = new FormData();
      formData.append('emp',JSON.stringify(emp));
      formData.append('file',this.myfile);
    
      console.log(formData);
   
  this._http.post('https://localhost:7268/fileupload/uploadtofileshub',formData,).subscribe(d=>console.log(d));
  //  this._http.get('https://localhost:7268/FileUpload/downloadFile?fileName=Stock.jpg',{ responseType:'blob'}).subscribe(d=>{
  //          const reader = new FileReader();
  //           reader.readAsDataURL(d);
  //           reader.onload = (e) => this.imageSrc = e.target.result as string;
  //            console.log(this.imageSrc);
    


    
  //   });

      // var headers = new HttpHeaders({ 'Authorization': 'Bearer ' +this.token });
      //let options = new RequestOptions({ headers: headers });
    //  this._http.get('http://api.najumsons.com/track/validatesecuredproduct/nac101',{ headers: headers }).subscribe(d=>console.log(d))

    }
   // console.log(   this._http.get('http://api.najumsons.com/track/validatesecuredproduct/nac101').subscribe(d=>console.log(d)));
  }
  

