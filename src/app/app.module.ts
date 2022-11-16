import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CharactersListComponent } from "./characters-list/characters-list.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";
import { CharactersHomeComponent } from "./characters-home/characters-home.component";
import { CharactersContacComponent } from "./characters-contac/characters-contac.component";
import { CharactersClassComponent } from "./characters-class/characters-class.component";

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    FavoritesListComponent,
    CharactersHomeComponent,
    CharactersContacComponent,
    CharactersClassComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
