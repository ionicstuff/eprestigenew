import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notice-board',
    loadChildren: () => import('./notice-board/notice-board.module').then( m => m.NoticeBoardPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'directory',
    loadChildren: () => import('./directory/directory.module').then( m => m.DirectoryPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'buy-sell',
    loadChildren: () => import('./buy-sell/buy-sell.module').then( m => m.BuySellPageModule)
  },
  {
    path: 'interact',
    loadChildren: () => import('./interact/interact.module').then( m => m.InteractPageModule)
  },
  {
    path: 'celebration',
    loadChildren: () => import('./celebration/celebration.module').then( m => m.CelebrationPageModule)
  },
  {
    path: 'coffee-corner',
    loadChildren: () => import('./coffee-corner/coffee-corner.module').then( m => m.CoffeeCornerPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'chat-details',
    loadChildren: () => import('./chat-details/chat-details.module').then( m => m.ChatDetailsPageModule)
  },
  {
    path: 'add-todo',
    loadChildren: () => import('./add-todo/add-todo.module').then( m => m.AddTodoPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'view-all',
    loadChildren: () => import('./view-all/view-all.module').then( m => m.ViewAllPageModule)
  },
  {
    path: 'details-all-list',
    loadChildren: () => import('./details-all-list/details-all-list.module').then( m => m.DetailsAllListPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
