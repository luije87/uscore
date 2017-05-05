import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
      { timeago : '11d', date: 'November 5, 1955', src : 'Fox Sports', srcimg: 'assets/img/marty-avatar.png', description : 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!.Whoa. This is heavy.', img : 'assets/img/advance-card-bttf.png'}
  ]
  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {

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
}
