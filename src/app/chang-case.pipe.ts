import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changCase'
})
export class ChangCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return value.toUpperCase();
  }

}
