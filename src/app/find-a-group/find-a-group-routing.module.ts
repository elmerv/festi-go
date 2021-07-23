import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindAGroupPage } from './find-a-group.page';

const routes: Routes = [
  {
    path: '',
    component: FindAGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindAGroupPageRoutingModule {}
