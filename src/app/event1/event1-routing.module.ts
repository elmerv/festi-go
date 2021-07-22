import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Event1Page } from './event1.page';

const routes: Routes = [
  {
    path: '',
    component: Event1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Event1PageRoutingModule {}
