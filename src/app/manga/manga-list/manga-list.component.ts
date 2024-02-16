import { Component } from '@angular/core';
import { MangaService } from '../manga.service';
import { Observable } from 'rxjs';
import { Manga } from '../manga';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.css'
})
export class MangaListComponent {
  manga$: Observable<Array<Manga>>;
  constructor(private service: MangaService) {
    console.log('Manga List is Created!');
    this.manga$ = this.service.getTopMangaList();
  }
}
