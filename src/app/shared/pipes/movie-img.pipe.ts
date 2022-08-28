import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImg',
})
export class MovieImgPipe implements PipeTransform {
  transform(value: string): string {
    return `https://image.tmdb.org/t/p/original/${value}`;
    // return `https://image.tmdb.org/t/p/w500/${value}`;
  }
}
