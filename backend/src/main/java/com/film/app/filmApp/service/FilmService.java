package com.film.app.filmApp.service;

import com.film.app.filmApp.dto.request.FilmReq;
import com.film.app.filmApp.dto.response.FilmRes;
import com.film.app.filmApp.model.Film;
import com.film.app.filmApp.repository.FilmRepo;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FilmService {
  private final FilmRepo filmRepository;

  public List<FilmRes> getAllFilms() {
    return filmRepository.findAll().stream().map(this::toFilmResp).collect(Collectors.toList());
  }

  public FilmRes getFilmById(Long id) {
    return toFilmResp(filmRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Film not found")));
  }

  public FilmRes createFilm(FilmReq filmReq) {
    Film film = toFilm(filmReq);
    return toFilmResp(filmRepository.save(film));
  }

  public void deleteFilmById(Long id) {
    filmRepository.deleteById(id);
  }

  public FilmRes updateFilm(Long id, FilmReq filmReq) {
    Film film = toFilm(filmReq);
    film.setId(id);
    return toFilmResp(filmRepository.save(film));
  }




  public Film toFilm(FilmReq filmReq){
    return Film.builder()
        .title(filmReq.getTitle())
        .description(filmReq.getDescription())
        .genre(filmReq.getGenre())
        .year(filmReq.getYear())
        .director(filmReq.getDirector())
        .actors(filmReq.getActors())
        .build();
  }

  public FilmRes toFilmResp(Film film){
      return FilmRes.builder()
          .id(film.getId())
          .title(film.getTitle())
          .description(film.getDescription())
          .genre(film.getGenre())
          .year(film.getYear())
          .director(film.getDirector())
          .actors(film.getActors())
          .build();
  }



}
