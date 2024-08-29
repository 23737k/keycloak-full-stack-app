package com.film.app.filmApp.dto.response;

import jakarta.persistence.ElementCollection;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FilmRes {
  private Long id;
  private String title;
  private String description;
  private String genre;
  private int year;
  private String director;
  private List<String> actors = new ArrayList<>();
}
