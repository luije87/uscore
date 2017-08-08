import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { EventService } from '../../providers/event-service';

/**
 * Generated class for the Events page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
  providers : [EventService]
})
export class Events {
    public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService) {
    this.loadEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Events');
  }

  loadEvents(){
    this.eventService.load()
  .then(data => {
    this.people = data;
    console.log(this.people);
  });
  }
}
