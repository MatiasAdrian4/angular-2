import { Component } from "@angular/core";
import { Character } from "../characters-list/Character";

@Component({
  selector: "app-characters-home",
  templateUrl: "./characters-home.component.html",
  styleUrls: ["./characters-home.component.css"],
})
export class CharactersHomeComponent {
  favouriteList: Set<Character> = new Set()

  constructor() {}

  newFavouriteCharacterAdded(character: Character) {
    this.favouriteList.add(character);
  }
}
