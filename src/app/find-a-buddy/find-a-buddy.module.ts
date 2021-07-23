import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindABuddyPageRoutingModule } from './find-a-buddy-routing.module';

import { FindABuddyPage } from './find-a-buddy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindABuddyPageRoutingModule
  ],
  declarations: [FindABuddyPage]
})
export class FindABuddyPageModule {}
