package com.film.app.filmApp.dto.request;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FilmReq {
  private String title;
  private String description;
  private String genre;
  private int year;
  private String director;
  private List<String> actors;
}
