import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindABuddyPage } from './find-a-buddy.page';

const routes: Routes = [
  {
    path: '',
    component: FindABuddyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindABuddyPageRoutingModule {}
