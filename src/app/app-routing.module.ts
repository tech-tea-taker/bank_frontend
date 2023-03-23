import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { BankApprovalComponent } from './bank-approval/bank-approval.component';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"register",component:RegisterComponent},
  {path:"main",component:MainComponent},
  {path:"status",component:StatusComponent},
  {path:"banklogin",component:BankLoginComponent},
  {path:"bankApproval",component:BankApprovalComponent},
  {path:"transaction",component:TransactionPageComponent},
  {path:"accoutDetails",component:AccountDetailsComponent},
  {path:"transactionHistory",component:TransactionHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
