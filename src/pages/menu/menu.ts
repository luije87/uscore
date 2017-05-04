import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  templateUrl: 'menu.html'
})
export class Menu {
  sports = [
    { name : 'Tennis', icon : 'ios-tennisball-outline', page : HomePage },
    { name : 'Baseball', icon : 'ios-baseball-outline', page : HomePage },
    { name : 'Softball', icon : 'ios-baseball-outline', page : HomePage }, 
    { name : 'Volleyball', icon : 'ios-baseball-outline', page : HomePage },           
    { name : 'Soccer', icon : 'ios-baseball-outline', page : HomePage },
  ];

  features = [
    { name : 'News', icon : 'ios-paper-outline', page : HomePage },
  ];

  title : any;
  page : any;
  constructor(public params: NavParams, public nav: NavController, private viewCtrl: ViewController){
    this.title = this.params.get('from');
    this.page = this.params.get('page');
  }

  itemSelected(item) {
    this.nav.push(item.page);
  }

  navigate(){
    this.nav.push(this.page);
  }

  ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }
}


