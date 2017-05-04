import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name : 'news'
})
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class News {
  //public item : any;
  public item = 
      { timeago : '11d', date: 'November 5, 1955', src : 'Fox Sports', srcimg: 'assets/img/marty-avatar.png', description : 'Wait a minute. Wait a minute, Doc. Uhhh...', img : 'assets/img/advance-card-bttf.png'};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
      // this.item = this.navParams.get('item');
      // console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad News');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
  }
  
}
