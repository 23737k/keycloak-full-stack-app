/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilmRes } from '../../models/film-res';

export interface GetAllFilms$Params {
}

export function getAllFilms(http: HttpClient, rootUrl: string, params?: GetAllFilms$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilmRes>>> {
  const rb = new RequestBuilder(rootUrl, getAllFilms.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FilmRes>>;
    })
  );
}

getAllFilms.PATH = '/api/films';
