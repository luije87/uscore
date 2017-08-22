import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage({
  name : 'News'
})
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers : [SocialSharing]
})
export class News {
  public item;    
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public socialSharing: SocialSharing) {
      //this.item = this.navParams.get('item');
      //console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad News');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
  }

  share(){
    this.socialSharing.share(this.item.description, this.item.description, null, "http://www.google.com");
  }
}
