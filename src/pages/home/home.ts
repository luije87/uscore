import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MenuService } from '../../providers/menu-service';
import { NewsService } from '../../providers/news-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [SocialSharing, MenuService, NewsService]
})
export class HomePage {
    
  public data : any;
  public menuItem : any;
  public LogoUrl : any;
  public FavoriteIcon : any;
  public favorites = [{ Id : '0e597d30-7f09-465c-b638-4820b3b6d5cc'} , { Id : '42cefe43-ca92-4362-bf5e-c622a52038c1' }];

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public socialSharing: SocialSharing, public menuService : MenuService, public newsService : NewsService, public navParams : NavParams) {
    this.data = [];
    this.menuItem = this.navParams.get('item');
    if(this.menuItem === undefined){
      this.menu();
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
     this.favorites.forEach(element => {
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
    console.log(item.Id);
    var keepgoing = true;
    this.favorites.forEach(element => {
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
    this.socialSharing.shareViaFacebook(item.title, item.urlToImage, item.url)
  }

  twitter(item){
    this.socialSharing.shareViaTwitter(item.title, item.urlToImage, item.url)
  }

  message(item){
    this.socialSharing.shareViaSMS(item.url, null)
  }
}
