import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import { FormatcreditcardComponent } from './components/formatcreditcard/formatcreditcard.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'formatcreditcard',component:FormatcreditcardComponent},
  {path:'currency',component:CurrencyComponent},
  {path:'balance',component:CheckbalanceComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
