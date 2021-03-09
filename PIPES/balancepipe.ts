import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balancepipe'
})
export class BalancepipePipe implements PipeTransform {

  transform(acctnum: number): any 
  {if(acctnum==123456789)
    {
    return "Availble balance is 3,56,076";
    }
    else if(acctnum==987654321)
    {
      return "Availble balance is 7,56,078";
    }
  }

}
