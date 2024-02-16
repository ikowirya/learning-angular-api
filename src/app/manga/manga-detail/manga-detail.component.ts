import { Component } from '@angular/core';
import { MangaService } from '../manga.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Manga } from '../manga';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrl: './manga-detail.component.css'
})
export class MangaDetailComponent {
  manga$: Observable<Manga>;
  constructor(private router: ActivatedRoute, private service: MangaService) {
    const id: number = this.router.snapshot.params["id"];
    this.manga$ = this.service.getMangaDetail(id);
  }
}
