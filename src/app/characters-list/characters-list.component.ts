import { Component, OnInit } from '@angular/core';
import { CharacterDataService } from '../character-data.service';
import { CharacterFavoriteListService } from '../character-favorite-list.service';
import { Character } from './Character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private list: CharacterFavoriteListService,
    private characterDataService: CharacterDataService) { 
    
  }

  addToList(character: Character) : void {
    this.list.addToList(character);
  }

  ngOnInit(): void {
    this.characterDataService.getAll()
    .subscribe(characters => this.characters = characters);
  }
}


