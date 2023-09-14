import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe2'
})
export class CustomPipe2 implements PipeTransform {

  transform(value: string, num: number): string {
    let result: string[] = [];
    let words: string[] = value.split(/\s|,|\./).filter(word => word !== "");
    words.forEach((word) => {
        if ( word.length >= num ) {
            result.push(word)
        }
    })
    return result.join(" - ");
  }
}