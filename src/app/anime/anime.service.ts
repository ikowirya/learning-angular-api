import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { animeDetailEndpoint, topAnimeListEndpoint } from '../config/api';
import { Anime, GetAnimeDetailResponse, GetAnimeResponse } from './anime';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private _http: HttpClient) {}

  getTopAnimeList(): Observable<Array<Anime>> {
    return new Observable((observer) => {
      this._http
        .get<GetAnimeResponse>(topAnimeListEndpoint)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getAnimeDetail(id: number): Observable<Anime> {
    return new Observable((observer) => {
      this._http
        .get<GetAnimeDetailResponse>(`${animeDetailEndpoint}/${id}`)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}
