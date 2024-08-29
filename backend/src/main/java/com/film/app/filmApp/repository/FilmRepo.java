package com.film.app.filmApp.repository;

import com.film.app.filmApp.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepo extends JpaRepository<Film, Long> {
}
