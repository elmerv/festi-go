import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Event1PageRoutingModule } from './event1-routing.module';

import { Event1Page } from './event1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Event1PageRoutingModule
  ],
  declarations: [Event1Page]
})
export class Event1PageModule {}
