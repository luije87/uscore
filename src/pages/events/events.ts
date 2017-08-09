import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { EventService } from '../../providers/event-service';
import { DatePipe } from '@angular/common';

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
    public events: any;
    public loading:any;
    public data: any;
    appType = 'All';

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService, public loadingController: LoadingController) {
    this.events = [];
    this.presentLoadingDefault(); 
    
  }

 presentLoadingDefault() {
    this.loading = this.loadingController.create({
    content: 'Please wait...'
  });

  this.loading.present();
  this.loadEvents(this.appType);
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

  apps: any = {
    'All': [
      {
        name: 'Monopoly',
        price: '$0.99'
      },
      {
        name: 'Angry Birds',
        price: '$2.99'
      }
    ],
    'Today': [
      {
        name: 'Snapchat',
        price: 'GET'
      },
      {
        name: 'Instagram',
        price: 'OPEN'
      }
    ],
    'Upcoming': [
      {
        name: 'Spotify',
        price: 'OPEN'
      },
      {
        name: 'Pandora',
        price: 'GET'
      }
    ]
  };

   getItems(type: any) {
    if(this.data !== undefined){
      this.data.forEach(element => {
        if(new Date(element.StartDate) >= new Date()){
          this.events.push(element);
        }
      });
    }

    return this.events;
  }

  loadEvents(type: any){
    this.events = [];
    this.eventService.load().then(data => 
    {   
      switch(type){
        case 'All':
        data.forEach(element => {
          this.events.push(element);
        });
        break;
        case 'Today':
        data.forEach(element => {          
           if(new Date(element.StartDate) === new Date()){
             console.log('Today case');
            this.events.push(element);
          }
        });
        break;
        case 'Upcoming':
        var date = new Date();
        date.setDate(date.getDate() + 7);
        data.forEach(element => {          
          
           if(new Date(element.StartDate) <= date){
             console.log('Today case');
            this.events.push(element);
          }
        });
        break;
      }
      this.loading.dismiss();
    });
  }
}
