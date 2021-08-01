import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-a',
  templateUrl: './invoice-a.component.html',
  styleUrls: ['./invoice-a.component.scss']
})
export class InvoiceAComponent implements OnInit {

  InvoiceA_Form:FormGroup = new FormGroup({});
  invoiceDetail:FormArray =  new FormArray([]);
  constructor(private fb:FormBuilder) { }

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
     })
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
  }
  deleteSerial(i:any){
    this.detailArray.removeAt(i);
  
  }
  submit(){
    console.log(this.InvoiceA_Form.value);
  }
}
