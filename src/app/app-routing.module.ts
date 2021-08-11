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
    path: 'find-a-group',
    loadChildren: () => import('./find-a-group/find-a-group.module').then( m => m.FindAGroupPageModule)
  },
  {
    path: 'find-a-buddy',
    loadChildren: () => import('./find-a-buddy/find-a-buddy.module').then( m => m.FindABuddyPageModule)
  },
  {
    path: 'conversation/:person',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule)
  },
  {
    path: 'group-info',
    loadChildren: () => import('./group-info/group-info.module').then( m => m.GroupInfoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
