import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  /**
 * Capitalizes the first character of a string and returns the result.
 *
 * @param {string} value - The string to capitalize.
 * @returns {string} The capitalized string.
 */
transform(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

}
