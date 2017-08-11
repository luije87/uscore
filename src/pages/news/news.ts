import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name : 'News'
})
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class News {
  public item;    
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
      this.item = this.navParams.get('item');
      console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad News');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
  }
}
