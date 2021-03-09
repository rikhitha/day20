import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditpipe'
})
export class CreditpipePipe implements PipeTransform {

  transform(value: any): any
  {
    let regexpNumber = new RegExp('^[+ 0-9]{15}$');
    let h=regexpNumber.test(value);
    return h;
    
  }

}
