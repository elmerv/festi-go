import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'splashpage',
    loadChildren: () => import('./splashpage/splashpage.module').then( m => m.SplashpagePageModule)
  },
  {
    path: 'event-info/:id',
    loadChildren: () => import('./event-info/event-info.module').then( m => m.EventInfoPageModule)
  },
  {
    path: 'event1',
    loadChildren: () => import('./event1/event1.module').then( m => m.Event1PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
