import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { MangaListComponent } from './manga-list/manga-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';



@NgModule({
  declarations: [MangaListComponent, MangaDetailComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule
  ]
})
export class MangaModule { }
