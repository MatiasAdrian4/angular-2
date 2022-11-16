import { Component, Input } from "@angular/core";
import { Character } from "../characters-list/Character";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.css"],
})
export class FavoritesListComponent {
  @Input() favouriteList: Set<Character> = new Set();

  constructor() {}
}
