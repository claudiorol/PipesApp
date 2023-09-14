import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortBy implements PipeTransform {

  transform(heroes: Hero[], orderBy: keyof Hero | null, order: string): Hero[] {
    switch (orderBy) {
        case 'nombre':
            return heroes.sort( (a,b) => { 
                return order == "des" ? a.nombre > b.nombre ? 1 : -1 : a.nombre > b.nombre ? -1 : 1;
            });
        case 'vuela':
            return heroes.sort( (a,b) => {
                return order == "des" ? a.vuela > b.vuela ? 1 : -1 : a.vuela > b.vuela ? -1 : 1;
            });
        case 'raza':
            return heroes.sort( (a,b) => {
                return order == "des" ? a.raza > b.raza ? 1 : -1 : a.raza > b.raza ? -1 : 1;
            });
        default:
            return heroes;
    }


    return heroes;
  }
}