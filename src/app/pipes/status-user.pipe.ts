import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusUser'
})
export class StatusUserPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Active' : 'Inactive';
  }

}
