import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NewsService } from '../../providers/news-service';
import { FavoritesService } from '../../providers/favorites-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [SocialSharing, NewsService, FavoritesService]
})
export class HomePage {
    
  public data : any;
  public menuItem : any;
  public LogoUrl : any;
  public FavoriteIcon : any;  

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public socialSharing: SocialSharing, public newsService : NewsService, public navParams : NavParams, private favoritesService : FavoritesService,) {
    this.data = [];
    this.menuItem = this.navParams.get('item');
    if(this.menuItem === undefined){
      this.menu(true);
    }
    else{
      this.checkIfFavorite(this.menuItem);
      this.loadNews();
    }
  }

  loadNews() {    
      this.newsService.load(this.menuItem).then(data => {
          this.data = data;
          this.data.articles.forEach(element => {
            element.logoUrl = this.menuItem.LogoUrl;
            this.LogoUrl = element.logoUrl;
          });      
      });    
  }

  favorite(item : any){
    var wasInFavorites = false;
     this.favoritesService.load().forEach(element => {
        if(element.Id.toLowerCase() === item.Id){                   
          wasInFavorites = true;          
      }
    });    

    if(wasInFavorites){        
      this.FavoriteIcon = 'ios-star-outline';  
    }
    else{      
      this.FavoriteIcon = 'ios-star';
    }
  }


  checkIfFavorite(item : any){
    var keepgoing = true;
    this.favoritesService.load().forEach(element => {
      if(keepgoing){
        if(element.Id.toLowerCase() === item.Id){
          this.FavoriteIcon = 'ios-star';  
          keepgoing = false;          
      }
      else{
         this.FavoriteIcon = 'ios-star-outline';
        }
      }
    });
  }

  menu(emptyfeed : any) {
    this.navCtrl.push('menu', { from: 'home', title: 'News', emptyfeed: emptyfeed }, { direction: 'back' });
  }

  view(item){
    this.navCtrl.push('News', { item: item }, { direction: 'forward' });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  facebook(item){
    this.socialSharing.shareViaFacebook(item.title, item.urlToImage, item.url)
  }

  twitter(item){
    this.socialSharing.shareViaTwitter(item.title, item.urlToImage, item.url)
  }

  message(item){
    this.socialSharing.shareViaSMS(item.url, null)
  }
}
