import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage({
  name: 'News'
})
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class News {
  //public item : any;
  public item =
  { timeago: '11d', date: 'November 5, 1955', src: 'Fox Sports', srcimg: 'assets/img/marty-avatar.png', description: 'Wait a minute. Wait a minute, Doc. Uhhh...', img: 'assets/img/advance-card-bttf.png' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,public http: Http) {
    // this.item = this.navParams.get('item');
    // console.log(this.item);
    this.http.get('http://localhost:58349/api/default').map(res => res.json()).subscribe(data => {
        console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad News');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
  }

}
