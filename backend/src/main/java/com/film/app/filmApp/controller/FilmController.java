package com.film.app.filmApp.controller;

import com.film.app.filmApp.dto.request.FilmReq;
import com.film.app.filmApp.dto.response.FilmRes;
import com.film.app.filmApp.service.FilmService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/films")
@RequiredArgsConstructor
public class FilmController {
  private final FilmService filmService;

  @GetMapping
  @ResponseStatus(HttpStatus.OK)
  public List<FilmRes> getAllFilms() {
    return filmService.getAllFilms();
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public FilmRes getFilmById(@PathVariable Long id) {
    return filmService.getFilmById(id);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public FilmRes createFilm(@RequestBody FilmReq film) {
    return filmService.createFilm(film);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.ACCEPTED)
  public void deleteFilm(@PathVariable Long id) {
    filmService.deleteFilmById(id);
  }

  @PutMapping("/{id}")
  @ResponseStatus(HttpStatus.ACCEPTED)
  public FilmRes updateFilm(@PathVariable Long id, @RequestBody FilmReq film) {
    return filmService.updateFilm(id, film);
  }


}
