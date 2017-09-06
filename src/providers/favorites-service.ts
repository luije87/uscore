import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FavoritesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FavoritesService {

  public favorites = [];

  constructor(public http: Http, private storage: Storage) {
  }

  load(): Promise<any> {
    return this.storage.get('favorites');
  }

  add(item: any) {
    /*this.storage.get('favorites').then((val) => {     
      val.push(item);
      this.storage.set('favorites', val);
    });*/
  }

  remove(item: any) {
    /*this.storage.get('favorites').then((val) => {
      var index = val.indexOf(item);
      val.splice(index, 1);
      this.storage.set('favorites', val);
    });*/
  }
}
