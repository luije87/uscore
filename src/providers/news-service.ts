import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EventService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {

  data:any;
  constructor(public http: Http) {
    console.log('Hello NewsService Provider');
  }

  load() {
  var items = [
      { 
        timeago : '11d', date: 'November 5, 1955', src : 'Fox Sports', srcimg: 'assets/img/marty-avatar.png', description : 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!.Whoa. This is heavy.', img : 'assets/img/advance-card-bttf.png'
      },
      { 
        timeago : '11d', date: 'May 12, 1984', src : 'Sarah Connor', srcimg: 'assets/img/ian-avatar.png', description : 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.', img : 'assets/img/advance-card-tmntr.jpg'
      },
      { 
        timeago : '11d', date: 'November 5, 1955', src : 'Fox Sports', srcimg: 'assets/img/sarah-avatar.png.jpeg', description : "Your scientists were so preoccupied with whether or not they could, that they didn't stop to think if they should.", img : 'assets/img/advance-card-jp.jpg'
      }
  ];

  return items;
}
}
