import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GetJournalsResponse, Journal} from '../types/journal';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalsService {
  private readonly http = inject(HttpClient);

  getJournals(): Observable<Journal[]> {
    return this.http.get<GetJournalsResponse>('/api/v1/articles-fetch/all').pipe(
      map(response => response.journals)
    );
  }

  searchJournals(searchTerm: string): Observable<Journal[]> {
    return this.http.get<GetJournalsResponse>('/api/v1/articles-fetch', {
      params: new HttpParams().set('search', searchTerm)
    }).pipe(
      map(response => response.journals),
    )
  }
}
