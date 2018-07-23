import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  /**
   * PipeTransform method that returns modified value
   * @param value original options in multiselect
   * @param searchText input text to filter options
   * @return modified multiselect options according to given input text 
   */
  transform(value: any[], searchText: any): any {
    return value.filter(option => option.value.toLowerCase().includes(searchText.toLowerCase()))
  }

}
