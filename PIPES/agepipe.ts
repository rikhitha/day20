import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'ex'
})
export class ExPipe implements PipeTransform 
{
  transform(value: any|moment.Moment): any {

  	if (!value) return value;

		return moment().diff(value, 'years')+" Years";
  
  
}

 
  



}
