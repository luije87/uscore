import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NewsService } from '../../providers/news-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [SocialSharing, NewsService]
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public socialSharing: SocialSharing, public newsService : NewsService) {
this.items = this.newsService.load();
  }

  menu() {
    this.navCtrl.push('menu', { from: 'home', title: 'News' }, { direction: 'back' });
  }

  view(item){
    this.navCtrl.push('News', { item: item }, { direction: 'forward' });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  facebook(item){
    this.socialSharing.shareViaFacebook(item.description, item.img, null)
  }

  twitter(item){
    this.socialSharing.shareViaTwitter(item.description, item.img, null)
  }

  message(item){
    this.socialSharing.shareViaSMS(item.description, null)
  }
}
