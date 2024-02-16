import { Injectable } from '@angular/core';
import { mangaDetailEndpoint, topMangaListEndpoint } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetMangaDetailResponse, GetMangaResponse, Manga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  constructor(private _http: HttpClient) {}

  getTopMangaList(): Observable<Array<Manga>> {
    return new Observable((observer) => {
      this._http.get<GetMangaResponse>(topMangaListEndpoint)
      .subscribe(response => {
        observer.next(response.data);
        observer.complete();
      });
    });
  }

  getMangaDetail(id: number): Observable<Manga> {
    return new Observable((observer) => {
      this._http
        .get<GetMangaDetailResponse>(`${mangaDetailEndpoint}/${id}`)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}
