import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1'
})
export class CustomPipe1 implements PipeTransform {

  transform(value: string, remainder: number): string {
    let result: string = "";
    let words: string[] = value.split(" ");
    words.forEach( word => {
      for ( let i=0 ; i < word.length ; i++ ) {
        if (i%2 == remainder) {
          result = result.concat(word[i].toUpperCase());
        } else {
          result = result.concat(word[i].toLowerCase());
        }
      }
      result = result.concat(" ");
    })
    result = result.trim();
    return result;
  }
}
