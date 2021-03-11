import { Component } from '@angular/core';
import { ValidateService } from './service/validate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ftry';
  private vali:ValidateService=new ValidateService();
  cu:string="USD";
  check!:string[];
  value!:number;
  account!:number[];
  accnt!:number;
  val!:number;

  valid()
  {
    this.check=this.vali.valban(this.cu);

  }
  amount()
  {
    this.value=this.vali.amount();
  }
  accounts()
  {
    this.account=this.vali.accounts();

  }

}
