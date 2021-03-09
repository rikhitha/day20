import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExPipe } from './component/pipes/ex.pipe';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormatcreditcardComponent } from './components/formatcreditcard/formatcreditcard.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { CreditpipePipe } from './component/pipes/creditpipe.pipe';
import { CurrencypipePipe } from './component/pipes/currencypipe.pipe';
import { BalancepipePipe } from './component/pipes/balancepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExPipe,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    FormatcreditcardComponent,
    CurrencyComponent,
    CheckbalanceComponent,
    CreditpipePipe,
    CurrencypipePipe,
    BalancepipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
