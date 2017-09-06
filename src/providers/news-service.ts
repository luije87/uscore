import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
