import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainPage } from './main.page';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['main/home/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'home/login',
        loadChildren: () => import('../log-in-out/log-in-out.module').then( m => m.LogInOutPageModule)
      },
      {
        path: 'home/videos',
        loadChildren: () => import('../videos/videos.module').then( m => m.VideosPageModule)
      },
      {
        path: 'home/bases',
        loadChildren: () => import('../bases/bases.module').then( m => m.BasesPageModule)
      },
      {
        path: 'home/newsletter',
        loadChildren: () => import('../newsletter/newsletter.module').then( m => m.NewsletterPageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin}
      },
      {
        path: 'home/chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
