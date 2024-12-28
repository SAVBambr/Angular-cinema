import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../models/book';

export const GenreTranslations: { [key in Genre]: string } = {
    [Genre.Fantasy]: 'Фантастика',
    [Genre.Romance]: 'Роман',
    [Genre.Detective]: 'Детектив',
    [Genre.Science]: 'Научное'
};


@Pipe({
  name: 'eNumAsString'
})
export class ENumAsStringPipe implements PipeTransform {
   
  transform(value: Genre): string {
    return GenreTranslations[value] || 'Неизвестный жанр';
  }
}
