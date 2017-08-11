import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name : 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class Menu {
  
  sports = [
    { name: 'Baseball', icon: 'ios-baseball-outline', page: 'HomePage' },
    { name: 'Football', icon: 'ios-american-football-outline', page: 'HomePage' },
    { name: 'Softball', icon: 'ios-baseball-outline', page: 'HomePage' },
    { name: 'Soccer', icon: 'ios-football-outline', page: 'HomePage' },
    { name: 'Tennis', icon: 'ios-tennisball-outline', page: 'HomePage' },    
  ];

  features = [
    { name: 'News Feed', icon: 'ios-paper-outline', page: 'HomePage' },
    { name: 'Events', icon: 'ios-calendar-outline', page: 'Events' },
    { name: 'Trending', icon: 'ios-trending-up-outline', page: 'News' },
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


