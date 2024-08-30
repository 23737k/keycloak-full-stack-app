/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilmReq } from '../../models/film-req';
import { FilmRes } from '../../models/film-res';

export interface CreateFilm$Params {
      body: FilmReq
}

export function createFilm(http: HttpClient, rootUrl: string, params: CreateFilm$Params, context?: HttpContext): Observable<StrictHttpResponse<FilmRes>> {
  const rb = new RequestBuilder(rootUrl, createFilm.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FilmRes>;
    })
  );
}

createFilm.PATH = '/api/films';
