import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term?: any): any {
    // check if search term is undefined
    // if (term === 'hello') return ninjas;
    // return ninjas;
    // return ninjas.filter(function(ninja){
    //     return ninja.name.toLowerCase().includes(term.toLowerCase());
    // })
    if (ninjas != undefined) {
      return ninjas.filter(ninja => ninja.name.toLowerCase().includes(term.toLowerCase()));
    }
  }

}
