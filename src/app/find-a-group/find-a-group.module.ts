import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindAGroupPageRoutingModule } from './find-a-group-routing.module';

import { FindAGroupPage } from './find-a-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindAGroupPageRoutingModule
  ],
  declarations: [FindAGroupPage]
})
export class FindAGroupPageModule {}
