import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || !filterString || filterString === '' || !propName) {
      return value;
    }

    return value.filter((product) => {
      const re = new RegExp(filterString, 'gi');
      return re.test(product[propName] + ' ');
    });
  }
}
