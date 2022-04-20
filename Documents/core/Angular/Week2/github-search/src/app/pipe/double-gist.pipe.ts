import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleGist'
})
export class DoubleGistPipe implements PipeTransform {

  transform(value: any): unknown {
    return value + 2;
  }

}
