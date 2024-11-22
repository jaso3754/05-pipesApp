import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interface/heroe.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( heroes : Hero[], sortBy: keyof Hero | null): Hero[] {

    switch (sortBy) {
      case 'name'
        return heroes.sort( (a,b) => ( a.name + b.name) ? 1: -1 )


      
    }
  }

}
