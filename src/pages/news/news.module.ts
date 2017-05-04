import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { News } from './news';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    News,
  ],
  imports: [
    IonicPageModule.forChild(News),
  ],
  exports: [
    News
  ]
})
export class NewsModule {}
