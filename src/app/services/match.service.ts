import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) {}

  getMatches(): Observable<{ matches: Match[] }> {
    return this.http.get<{ matches: Match[] }>('/assets/data/matches.json');
  }
}