import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventService } from '../../providers/event-service';
import { Calendar } from '@ionic-native/calendar';

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
  providers: [EventService, Calendar]
})
export class Events {
  public events: any;
  public loading: any;
  public data: any;
  appType = 'All';


  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService, public loadingController: LoadingController, public calendar: Calendar) {
    this.events = [];
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    this.loading = this.loadingController.create({
      content: 'Please wait...'
    });

    this.loading.present();
    this.loadEvents();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Events');
  }

  /*doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.people.push( this.people.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }*/

  getItems(type: any) {
    this.events = [];
    if (this.data !== undefined) {
      switch (this.appType) {
        case 'All':
          this.events = this.data;
          break;
        case 'Today':
          var now =new Date();
          var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();

          this.data.forEach(element => {
            var from = new Date(element.StartDate);
            if (today === new Date(from.getFullYear(), from.getMonth(),from.getDate()).valueOf()) {
              this.events.push(element);
            }
          });
          break;
        case 'Upcoming':
          var date = new Date();
          date.setDate(date.getDate() + 7);
          this.data.forEach(element => {
            if (new Date(element.StartDate) <= date) {
              this.events.push(element);
            }
          });
          break;
      }
    }
  }

  loadEvents() {
    this.eventService.load().then(data => {
      this.data = data;
      this.events = data;
      this.loading.dismiss();
    });
  }

  addEventToCalendar(event : any){
      var date = new Date(event.StartDate);
      var dateTime = new Date(event.StartTime);       
      var time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), dateTime.getHours(), dateTime.getMinutes())
      this.calendar.createEventInteractively(event.Title, event.Location, event.Title , time, time);
  }

  doRefresh(refresher) {
    this.eventService.load().then(data => {
      this.data = data;      
      this.getItems(this.appType);
      refresher.complete();
    });
  }

  doPulling(refresher) {
    console.log('DOPULLING', refresher.progress);
  }
}
