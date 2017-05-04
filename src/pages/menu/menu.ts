import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class Menu {
  
  sports = [
    { name: 'Baseball', icon: 'ios-baseball-outline', page: 'home' },
    { name: 'Football', icon: 'ios-american-football-outline', page: 'home' },
    { name: 'Softball', icon: 'ios-baseball-outline', page: 'home' },
    { name: 'Soccer', icon: 'ios-football-outline', page: 'home' },
    { name: 'Tennis', icon: 'ios-tennisball-outline', page: 'home' },
  ];

  features = [
    { name: 'News', icon: 'ios-paper-outline', page: 'news' },
    { name: 'Trending', icon: 'ios-trending-up-outline', page: 'news' },
  ];

  title: any;
  from: any;
  constructor(public params: NavParams, public navCtrl: NavController, private viewCtrl: ViewController) {
    this.title = this.params.get('title');
    this.from = this.params.get('from');
  }

  itemSelected(item) {
    this.navCtrl.push(item.page);
  }

  navigate(item) {
    this.navCtrl.pop({ direction: 'forward' });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
}


