import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'videoDuration'
})
export class VideoDurationPipe implements PipeTransform {

  transform(value: string): string {
    const duration = moment.duration(value);
    let hours = duration.hours(),
        minutes = duration.minutes(),
        seconds = duration.seconds(),
        hString = (hours > 0) ? hours + ":" : "",
        mString = ((hours > 0) ? pad(minutes) : minutes) + ":",
        sString = pad(seconds);

    function pad(num) {
      return ("0" + num).substr(-2);
    }

    return `${hString}${mString}${sString}`;
  }
}
