import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
<<<<<<< HEAD
import { SocialSharing } from '@ionic-native/social-sharing';
import { NewsService } from '../../providers/news-service';
import { FavoritesService } from '../../providers/favorites-service';
=======
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
>>>>>>> origin/master

@IonicPage({
  name: 'News'
})
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers : [SocialSharing, NewsService, FavoritesService]
})
export class News {
<<<<<<< HEAD
  public data: any;
  public menuItem: any;
  public LogoUrl: any;
  public FavoriteIcon = 'ios-star-outline';

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public socialSharing: SocialSharing, public newsService: NewsService, public navParams: NavParams, private favoritesService: FavoritesService, ) {
    this.data = [];
    this.menuItem = this.navParams.get('item');
    if (this.menuItem === undefined) {
      this.menu(true);
    }
    else {
      this.checkIfFavorite(this.menuItem);
      this.loadNews();
    }
  }

  loadNews() {
    this.newsService.load(this.menuItem).then(data => {
      this.data = data;      
      console.log(this.data.items);
      this.data.items.forEach(element => {
        element.logoUrl = this.menuItem.LogoUrl;
        this.LogoUrl = element.logoUrl;
      });
    });
  }

  favorite(item: any) {
    this.favoritesService.load().then((val) => {
      var keepgoing = true;
      val.forEach(element => {
        if (keepgoing) {
          if (element.Id.toLowerCase() === item.Id) {
            this.favoritesService.remove(item);
            this.FavoriteIcon = 'ios-star-outline';
            keepgoing = false;
          }
        }
      });
      if (keepgoing) {
        this.favoritesService.add(item);
        this.FavoriteIcon = 'ios-star';
      }
    });
  }


  checkIfFavorite(item: any) {
    this.favoritesService.load().then((val) => {
      var scope = val;      
      var keepgoing = true;
      val.forEach(element => {
        if (keepgoing) {
          if (element.Id.toLowerCase() === item.Id) {
            this.FavoriteIcon = 'ios-star';
            keepgoing = false;
          }
        }
      });
=======
  //public item : any;
  public item =
  { timeago: '11d', date: 'November 5, 1955', src: 'Fox Sports', srcimg: 'assets/img/marty-avatar.png', description: 'Wait a minute. Wait a minute, Doc. Uhhh...', img: 'assets/img/advance-card-bttf.png' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,public http: Http) {
    // this.item = this.navParams.get('item');
    // console.log(this.item);
    this.http.get('http://localhost:58349/api/default').map(res => res.json()).subscribe(data => {
        console.log(data);
>>>>>>> origin/master
    });
  }

  menu(emptyfeed: any) {
    this.navCtrl.push('menu', { from: 'home', title: 'News', emptyfeed: emptyfeed }, { direction: 'back' });
  }

  view(item) {
    this.navCtrl.push('News', { item: item }, { direction: 'forward' });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  facebook(item) {
    this.socialSharing.shareViaFacebook(item.title, item.urlToImage, item.url)
  }

  twitter(item) {
    this.socialSharing.shareViaTwitter(item.title, item.urlToImage, item.url)
  }

  message(item) {
    this.socialSharing.shareViaSMS(item.url, null)
  }
<<<<<<< HEAD
=======

>>>>>>> origin/master
}
