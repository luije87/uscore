import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { IonicStorageModule } from '@ionic/storage';

=======
>>>>>>> origin/master
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule, 
    HttpModule,      
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
=======
    BrowserModule,  
    HttpModule,     
    IonicModule.forRoot(MyApp)
>>>>>>> origin/master
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
