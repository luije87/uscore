import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MenuService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MenuService {

  constructor(public http: Http) {
    console.log('Hello MenuService Provider');
  }


  load(){
    return new Promise(resolve => {
      this.http.get("http://localhost:50407/api/values")
            .map(res => res.json())
            .subscribe(data => {
              resolve(data);         
            });  
    });  
  }
}
