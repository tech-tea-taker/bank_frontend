import { NgForm } from '@angular/forms';
import { TransactionModel } from './../Model/transactionModel';
import { AccountDetailsModel } from './../Model/AccountDetailsModel';
import { TransactionService } from './../services/transaction/transaction.service';
import { Component, OnInit } from '@angular/core';
import { TransactionMdl } from '../Model/transactionMdl';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit{


  accountNumber:String;
  accountBalance:number;
  transactionModel:TransactionModel[];
  transactionModel1:TransactionModel[];
  startingDate:String;
  endingDate:String;

  mdl=[];

  constructor(private service:TransactionService){}

  ngOnInit(): void {
this.onGetAccoutDetails();

  }

  onGetAccoutDetails(){
    const userid=localStorage.getItem("user_id");
    if(userid!=null){
    this.service.geAccountDetails(userid).subscribe(
      (res:any)=>{
      this.accountBalance=res["totalAmount"];
      this.accountNumber=res["account_number"];
      }
    );
  }
}

  ondebit(){
    this.service.debitamount(this.accountNumber,this.startingDate,this.endingDate).subscribe(
      (res:any)=>{
      this.transactionModel=res;
        }
      
    );
  }

  oncredit(){
    this.ondebit();
    this.service.creditamount(this.accountNumber,this.startingDate,this.endingDate).subscribe(
      (res:any)=>{
        this.transactionModel1=res;
      }
    );
  }

  generatePdf(){
    var data = document.getElementById('tbl-pdf');  
    if(data!=null){
    html2canvas(data).then(canvas => {  
      var imgWidth = 208;   
      var imgHeight = canvas.height * imgWidth / canvas.width;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
      pdf.save('tranastion_history.pdf');
    });  
  }

  }

}
