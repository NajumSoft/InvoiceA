import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-a',
  templateUrl: './invoice-a.component.html',
  styleUrls: ['./invoice-a.component.scss']
})
export class InvoiceAComponent implements OnInit {

  InvoiceA_Form:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder) { }





  ngOnInit(): void {
     this.InvoiceA_Form = this.fb.group({
       data:['',Validators.required],
       customerName:['',Validators.required],
       fatherName:['',Validators.required],
       mobileNumber:['',Validators.required],
       lisenceNumber:['',Validators.required],
       address:['',Validators.required],
       note:['',Validators.required],
       invoiceDetail: this.fb.array([this.addSerial()]),
     })
  }

  get detailArray() {
    return this.InvoiceA_Form.get('invoiceDetail') as FormArray;
  }
  addSerial():FormGroup{
    return this.fb.group(
{
  serial:['',Validators.required],
  remarks:['',Validators.required],
  price:['',Validators.required],
 }
 
    )
  }
  status()
  {
   console.log(this.InvoiceA_Form.value);
  }
}
