import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NewsService } from '../../providers/news-service';
import { MenuService } from '../../providers/menu-service';
import { FavoritesService } from '../../providers/favorites-service';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [NewsService, MenuService, FavoritesService],
})
export class Menu {

  public menu: any;
  public favorites: any;
  public EmptyFeed: boolean;

  features = [
    { name: 'News Feed', icon: 'ios-paper-outline', page: 'HomePage' },
    { name: 'Events', icon: 'ios-calendar-outline', page: 'Events' },
    { name: 'Trending', icon: 'ios-trending-up-outline', page: 'News' },
  ];

  title: any;
  from: any;

  constructor(private storage: Storage, private alertCtrl: AlertController, public params: NavParams, public navCtrl: NavController, private viewCtrl: ViewController, private favoritesService: FavoritesService, private menuService: MenuService) {
    this.title = this.params.get('title');
    this.from = this.params.get('from');
    this.EmptyFeed = this.params.get('emptyfeed');
    this.load();
    this.loadFavorite();
  }

  loadFavorite() {
    this.storage.get('favorites').then(val => {
      if(val === null){
        this.storage.set('favorites', new Array());
      }
      else{
        this.favorites = val;
      }
    })
    
  }

  load() {
    this.menuService.load().then(data => {
      this.menu = data;
    });
  }

  itemSelected(item) {
    this.navCtrl.push(item.Page, { item });
  }

  navigate(item) {
    this.navCtrl.pop({ direction: 'forward' });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
}


