import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';



@NgModule({
  declarations: [AnimeListComponent, AnimeDetailComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule
  ]
})
export class AnimeModule { }
