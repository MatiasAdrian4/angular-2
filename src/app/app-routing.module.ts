import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersContacComponent } from "./characters-contac/characters-contac.component";
import { CharactersHomeComponent } from "./characters-home/characters-home.component";
import { CharactersClassComponent } from "./characters-class/characters-class.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "characters",
    pathMatch: "full",
  },
  {
    path: "characters",
    component: CharactersHomeComponent,
  },
  {
    path: "class",
    component: CharactersClassComponent,
  },
  {
    path: "contact",
    component: CharactersContacComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
