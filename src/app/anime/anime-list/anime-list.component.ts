import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css',
})
export class AnimeListComponent {
  anime$: Observable<Array<Anime>>;
  constructor(private service: AnimeService) {
    console.log('Anime List is Created!');
    this.anime$ = this.service.getTopAnimeList();
  }
}
