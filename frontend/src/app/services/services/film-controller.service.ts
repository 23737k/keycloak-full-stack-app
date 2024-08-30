/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createFilm } from '../fn/film-controller/create-film';
import { CreateFilm$Params } from '../fn/film-controller/create-film';
import { deleteFilm } from '../fn/film-controller/delete-film';
import { DeleteFilm$Params } from '../fn/film-controller/delete-film';
import { FilmRes } from '../models/film-res';
import { getAllFilms } from '../fn/film-controller/get-all-films';
import { GetAllFilms$Params } from '../fn/film-controller/get-all-films';
import { getFilmById } from '../fn/film-controller/get-film-by-id';
import { GetFilmById$Params } from '../fn/film-controller/get-film-by-id';
import { updateFilm } from '../fn/film-controller/update-film';
import { UpdateFilm$Params } from '../fn/film-controller/update-film';

@Injectable({ providedIn: 'root' })
export class FilmControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getFilmById()` */
  static readonly GetFilmByIdPath = '/api/films/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFilmById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilmById$Response(params: GetFilmById$Params, context?: HttpContext): Observable<StrictHttpResponse<FilmRes>> {
    return getFilmById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFilmById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilmById(params: GetFilmById$Params, context?: HttpContext): Observable<FilmRes> {
    return this.getFilmById$Response(params, context).pipe(
      map((r: StrictHttpResponse<FilmRes>): FilmRes => r.body)
    );
  }

  /** Path part for operation `updateFilm()` */
  static readonly UpdateFilmPath = '/api/films/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFilm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFilm$Response(params: UpdateFilm$Params, context?: HttpContext): Observable<StrictHttpResponse<FilmRes>> {
    return updateFilm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFilm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFilm(params: UpdateFilm$Params, context?: HttpContext): Observable<FilmRes> {
    return this.updateFilm$Response(params, context).pipe(
      map((r: StrictHttpResponse<FilmRes>): FilmRes => r.body)
    );
  }

  /** Path part for operation `deleteFilm()` */
  static readonly DeleteFilmPath = '/api/films/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFilm()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFilm$Response(params: DeleteFilm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteFilm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFilm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFilm(params: DeleteFilm$Params, context?: HttpContext): Observable<void> {
    return this.deleteFilm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllFilms()` */
  static readonly GetAllFilmsPath = '/api/films';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllFilms()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllFilms$Response(params?: GetAllFilms$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilmRes>>> {
    return getAllFilms(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllFilms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllFilms(params?: GetAllFilms$Params, context?: HttpContext): Observable<Array<FilmRes>> {
    return this.getAllFilms$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FilmRes>>): Array<FilmRes> => r.body)
    );
  }

  /** Path part for operation `createFilm()` */
  static readonly CreateFilmPath = '/api/films';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFilm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFilm$Response(params: CreateFilm$Params, context?: HttpContext): Observable<StrictHttpResponse<FilmRes>> {
    return createFilm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createFilm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFilm(params: CreateFilm$Params, context?: HttpContext): Observable<FilmRes> {
    return this.createFilm$Response(params, context).pipe(
      map((r: StrictHttpResponse<FilmRes>): FilmRes => r.body)
    );
  }

}
