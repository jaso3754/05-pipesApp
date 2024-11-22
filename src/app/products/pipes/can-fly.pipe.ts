import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {

  transform(value: boolean): 'vuela' | 'No Vuela' {

    return value ?  'vuela' : 'No Vuela'; 

  }
}