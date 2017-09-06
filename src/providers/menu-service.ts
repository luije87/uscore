import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  constructor(public http: Http) {
    console.log('Hello MenuService Provider');
  }

  load() {
    return new Promise(resolve => {
      this.http.get("http://app.10newsfeed.com/main/api/values")
      //this.http.get("http://localhost:50407/api/values")
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
