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
  public serviceUrl : string;
  public apiKey : any;

  constructor(public http: Http) {
    console.log('Hello NewsService Provider');    
  }


  /*public  = [
    { name : 'ESPN', page: 'HomePage', source : "espn", logoUrl : "https://icons.better-idea.org/icon?url=http://espn.go.com&size=70..120..200", menu : 'Sports'},
    { name : 'BBC Sports', page: 'HomePage', source : "bbc-sport", logoUrl : "https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/sport&size=70..120..200", menu : 'Sports'},
    { name : 'Fox Sports', page: 'HomePage', source : "fox-sports", logoUrl : "https://icons.better-idea.org/icon?url=http://www.foxsports.com&size=70..120..200", menu : 'Sports'},
    { name : 'NFL', page: 'HomePage', source : "nfl-news", logoUrl : "https://icons.better-idea.org/icon?url=http://www.nfl.com/news&size=70..120..200", menu : 'Sports'},
    { name : 'The Sport Bible', page: 'HomePage', source : "the-sport-bible", logoUrl : "https://icons.better-idea.org/icon?url=http://www.thesportbible.com&size=70..120..200", menu : 'Sports'},
    { name : 'BBC', page: 'HomePage', source : "bbc-news", logoUrl : "https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/news&size=70..120..200", menu : 'General'},
    { name : 'Reuters', page: 'HomePage', source : "reuters", logoUrl : "https://icons.better-idea.org/icon?url=http://www.reuters.com&size=70..120..200", menu : 'General'},
    { name : 'CNN', page: 'HomePage', source : "cnn", logoUrl : "https://icons.better-idea.org/icon?url=http://us.cnn.com&size=70..120..200", menu : 'General'},
    { name : 'TechRadar', page: 'HomePage', source : "techradar", logoUrl : "https://icons.better-idea.org/icon?url=http://www.techradar.com&size=70..120..200", menu : 'Technology'},
    { name : 'Recode', page: 'HomePage', source : "recode", logoUrl : "https://icons.better-idea.org/icon?url=http://www.recode.net&size=70..120..200", menu : 'Technology'},
  ];*/

  load(item : any) {    
   return new Promise(resolve => {
          this.http.get(item.Source)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });  
    });  
  }
}
