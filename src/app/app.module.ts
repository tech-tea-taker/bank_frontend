import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { BankApprovalComponent } from './bank-approval/bank-approval.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { BnNgIdleService } from 'bn-ng-idle';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MainComponent,
    StatusComponent,
    BankLoginComponent,
    BankApprovalComponent,
    TransactionPageComponent,
    AccountDetailsComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
