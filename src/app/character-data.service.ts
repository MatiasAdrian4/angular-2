import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './characters-list/Character';



const url = "https://62b76402691dcea2733e2878.mockapi.io/personajes";

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  constructor(private Http: HttpClient) { }

  public getAll(): Observable<Character[]> {
    return this.Http.get<Character[]>(url);
  }
}
