import { Component } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { CharacterFavoriteListService } from "../character-favorite-list.service";
import { Character } from "../characters-list/Character";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.css"],
})
export class FavoritesListComponent {
  favoriteList$: Observable<Character[]>;
  constructor(private list: CharacterFavoriteListService) {
    this.favoriteList$ = list.favoriteList.asObservable();
  }
}
