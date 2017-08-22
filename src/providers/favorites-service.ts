import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FavoritesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FavoritesService {

  public favorites = [
    { Id : '0e597d30-7f09-465c-b638-4820b3b6d5cc', DisplayName : "ESPN", LogoUrl : "https://icons.better-idea.org/icon?url=http://espn.go.com&size=70..120..200", Source : "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=e797302214f646e49fc51812820707dd", Page : "HomePage" } ,    
  ];

  constructor(public http: Http) {
    console.log('Hello FavoritesService Provider');
  }

  load(){
    return this.favorites;
  }
}
