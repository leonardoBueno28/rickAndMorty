import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class GeneralServiceService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(environment.urlAPI + '/character');
  }

  getCharacter(id: string) {
    return this.http.get<Character>(environment.urlAPI + '/character/' + id);
  }

  getNextPage(page: string) {
    return this.http.get(page);
  }

  searchCharacter(filter: string) {
    return this.http.get(environment.urlAPI + '/character/' + filter);
  }
}
