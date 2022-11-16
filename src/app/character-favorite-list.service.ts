import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Character } from './characters-list/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterFavoriteListService {

  private _favoriteList:Character[] = [];
  favoriteList: BehaviorSubject<Character[]> = new BehaviorSubject(this._favoriteList);

  constructor() { }

  addToList(character: Character){
    let agent = this._favoriteList.find((valor1) => valor1.personaje == character.personaje);
    if(!agent){
      this._favoriteList.push(character);
    }else{

    }
    this.favoriteList.next(this._favoriteList);
  }

}
