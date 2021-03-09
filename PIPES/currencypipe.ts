import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencypipe'
})
export class CurrencypipePipe implements PipeTransform {

  transform(value:any,from:any,to:any): any
   {
     if(from=="INR" && to=="EUR")

     {
     
       return value *0.01150;
     }
     else if(from=="INR" && to=="USD")
     {
      return value *13.66;
     }
     else if(from=="EUR" && to=="INR")
     {
      return value *86.94;
     }
     else if(from=="EUR" && to=="USD")
     {
      return value *1.19;
     }
     else if(from=="USD" && to=="INR")
     {
      return value *73.34;
     }
     else if(from=="USD" && to=="EUR")
     {
      return value *0.084;
     }
     else{
       return value;
     }
    
    
  }

}
