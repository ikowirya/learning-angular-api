import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'list',
    component: AnimeListComponent,
  },
  {
    path: ':id',
    component: AnimeDetailComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
