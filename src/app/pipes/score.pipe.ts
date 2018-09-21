import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value<0){
      return `<span class="text-danger h2">${value}</span>`;
    }
    else if(value>0){
      return `<span class="text-success h2">${value}</span>`;
    }
    else{
      return `<span class="text-info h2">+ ${value}</span>`;
    }
  }
}