/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilmRes } from '../../models/film-res';

export interface GetFilmById$Params {
  id: number;
}

export function getFilmById(http: HttpClient, rootUrl: string, params: GetFilmById$Params, context?: HttpContext): Observable<StrictHttpResponse<FilmRes>> {
  const rb = new RequestBuilder(rootUrl, getFilmById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getFilmById.PATH = '/api/films/{id}';
