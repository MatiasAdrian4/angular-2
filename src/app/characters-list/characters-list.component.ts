import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CharacterDataService } from "../character-data.service";
import { Character } from "./Character";

@Component({
  selector: "app-characters-list",
  templateUrl: "./characters-list.component.html",
  styleUrls: ["./characters-list.component.css"],
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterDataService: CharacterDataService) {}

  @Output() addCharacterMessageEvent = new EventEmitter<Character>();

  addCharacterToList(character: Character) {
    this.addCharacterMessageEvent.emit(character);
  }

  ngOnInit(): void {
    this.characterDataService
      .getAll()
      .subscribe((characters) => (this.characters = characters));
  }
}
