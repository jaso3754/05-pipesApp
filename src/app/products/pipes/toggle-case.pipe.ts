import { Pipe, PipeTransform } from "@angular/core";

// fernando  | toggleCasePipe = 'FERNANDO'
// FERNANDO | toggleCasePipe = 'fernando'

@Pipe({
  name:'toggleCase'

})



export class toggleCasePipe implements PipeTransform {

  transform(value: string, toUpper:boolean = false): string {
    console.log ({ value, toUpper});

    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase();

  }

}

