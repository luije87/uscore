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
