import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [SocialSharing]
})
export class HomePage {
  items = [
      { 
        timeago : '11d', date: 'November 5, 1955', src : 'Fox Sports', srcimg: 'assets/img/marty-avatar.png', description : 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!.Whoa. This is heavy.', img : 'assets/img/advance-card-bttf.png'
      },
      { 
        timeago : '11d', date: 'May 12, 1984', src : 'Sarah Connor', srcimg: 'assets/img/ian-avatar.png', description : 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.', img : 'assets/img/advance-card-tmntr.jpg'
      },
      { 
        timeago : '11d', date: 'November 5, 1955', src : 'Fox Sports', srcimg: 'assets/img/sarah-avatar.png.jpeg', description : "Your scientists were so preoccupied with whether or not they could, that they didn't stop to think if they should.", img : 'assets/img/advance-card-jp.jpg'
      }
  ];
  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public socialSharing: SocialSharing) {

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
    this.socialSharing.shareViaFacebook("Hi", item.img, "http://www.google.com")
  }

  twitter(item){
    this.socialSharing.shareViaTwitter("Hi", item.img, "http://www.google.com")
  }

  message(item){
    this.socialSharing.shareViaSMS("", null)
  }
}
