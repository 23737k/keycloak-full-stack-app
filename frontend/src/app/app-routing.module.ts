import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmComponent} from "./pages/film/film.component";

const routes: Routes = [
  {path:'films', component:FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
