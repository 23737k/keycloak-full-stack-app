import { Component } from '@angular/core';
import {FilmControllerService} from "../../services/services/film-controller.service";
import {FilmRes} from "../../services/models/film-res";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {

  films:FilmRes[] = [];

  constructor(private filmService: FilmControllerService) {
    filmService.getAllFilms().subscribe({
      next: data => {
        this.films = data;
      }
    })
  }


}
