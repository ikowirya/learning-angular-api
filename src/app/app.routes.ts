import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'anime',
    loadChildren: () =>
      import('./anime/anime.module').then((value) => value.AnimeModule),
  },
  {
    path: 'manga',
    loadChildren: () =>
      import('./manga/manga.module').then((value) => value.MangaModule),
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
