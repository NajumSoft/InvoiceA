import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,Params,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { FormA } from '../Models/form-a';
@Component({
  selector: 'app-invoice-a',
  templateUrl: './invoice-a.component.html',
  styleUrls: ['./invoice-a.component.scss']
})
export class InvoiceAComponent implements OnInit {
  InvoiceType= 'Create Invoice';
  BtnText= 'Create';
  InvoiceA_Form:FormGroup = new FormGroup({});
  invoiceDetail:FormArray =  new FormArray([]);
  constructor(private fb:FormBuilder,private _http:HttpClient,
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
     this.InvoiceA_Form = this.fb.group({
       date:['',Validators.required],
       customerName:['',Validators.required],
       fatherName:['',Validators.required],
       mobileNumber:['',Validators.required],
       lisenceNumber:['',Validators.required],
       address:['',Validators.required],
       note:['',Validators.required],
       invoiceDetail: this.fb.array([this.makeSerial()]),
     });
     if(this.ActivatedRoute.snapshot.params.id > 0 )
     {
         this.InvoiceType = 'Edit Mode';
         this.BtnText = 'Update';
          console.log('edit Mode');
          this.getDataById();
     }
  }

  get detailArray() {
    return this.InvoiceA_Form.get('invoiceDetail') as FormArray;

  }
  makeSerial():FormGroup{
    return this.fb.group(
{
  serial:['',Validators.required],
  remarks:['Solid 9mm N.P.B bore Pistol',Validators.required],
  price:['',Validators.required],
 }
    
 
    )
   
  }
  addSerial()
  {
   this.detailArray.push(this.makeSerial());

   this.toastr.success('New Row Added');
  }
  deleteSerial(i:any){
    this.detailArray.removeAt(i);
    this.toastr.warning('One Row Deleted');
    
  }
  updateRecord(){
    // this._http.post('http://localhost/myproj/update.php?id=',this.InvoiceA_Form.value).subscribe(d => {
    //   //this.router.navigate(['/listofinvoices']);
    
    //   this.toastr.success('Records Saved');
    // },error => {
    //   console.log(error.error.text);

    // },);
  }
  getDataById(){
    this._http.get('http://localhost/myproj/getbyid.php?id='+this.ActivatedRoute.snapshot.params.id).subscribe(d => {
       //this.router.navigate(['/listofinvoices']);
       
       
       console.log(d[0]);
       this.InvoiceA_Form.patchValue({
        date:d[0].Date,
        customerName:d[0].CustomerName,
       });
      this.toastr.success('Edit Mode is On');
    },error => {
      console.log(error.error.text);

    },);


  }
  submit(){
    // console.log(this.InvoiceA_Form.value);
    this._http.post('http://localhost/myproj/WebApi.php',this.InvoiceA_Form.value).subscribe(d => {
      this.router.navigate(['/listofinvoices']);

      this.toastr.success('Records Saved');
    },error => {
      console.log(error.error.text);

    },);

  }
}
