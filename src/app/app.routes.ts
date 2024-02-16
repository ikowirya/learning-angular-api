import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./auth/auth.guard";

export const routes: Routes = [
  {
    path: "anime",
    loadChildren: () =>
      import("./anime/anime.module").then((value) => value.AnimeModule),
    canActivate: [authGuard],
  },
  {
    path: "manga",
    loadChildren: () =>
      import("./manga/manga.module").then((value) => value.MangaModule),
  },
  {
    path: "login",
    component: LoginComponent,
  },
];
