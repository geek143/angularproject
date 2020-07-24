import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any) {
    return value.filter( search =>{
      return search.name.toLowerCase().indexOf(searchTerm) > -1
    })
  }

}
