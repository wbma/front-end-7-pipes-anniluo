import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {


  transform(filename: string, thumbnail?: string): any {

    const small = '-tn160.png';
    const medium = '-tn320.png';
    const large = '-tn640.png';

    const temp = filename.split('.');
    let thumbName = '';
    if (thumbnail === 'small') {
      thumbName = temp[0] + small;
    } else if (thumbnail === 'medium') {
      thumbName = temp[0] + medium;
    } else if (thumbnail === 'large') {
      thumbName = temp[0] + large;
    } else if (thumbnail === 'screenshot') {
      thumbName = filename;
    } else {
      thumbName = temp[0] + medium;
    }
    return thumbName;
  }

}
