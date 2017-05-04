import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Menu } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {

  }

  menu(){
    this.navCtrl.push(Menu, {from:'News', page : HomePage}, {direction:'back'});
  }

  ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }
}
