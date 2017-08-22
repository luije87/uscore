import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NewsService } from '../../providers/news-service';
import { MenuService } from '../../providers/menu-service';

@IonicPage({
  name : 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers : [NewsService, MenuService],
})
export class Menu {

  public menu : any;

  features = [
    { name: 'News Feed', icon: 'ios-paper-outline', page: 'HomePage' },
    { name: 'Events', icon: 'ios-calendar-outline', page: 'Events' },
    { name: 'Trending', icon: 'ios-trending-up-outline', page: 'News' },
  ];

  title: any;
  from: any;
  constructor(public params: NavParams, public navCtrl: NavController, private viewCtrl: ViewController, private menuService : MenuService) {
    this.title = this.params.get('title');
    this.from = this.params.get('from');
    this.load();
  }

  load(){
    this.menuService.load().then(data => {
      this.menu = data;
    });
  }

  itemSelected(item) {       
    this.navCtrl.push(item.Page, {item});
  }

  navigate(item) {
    this.navCtrl.pop({ direction: 'forward' });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
}


