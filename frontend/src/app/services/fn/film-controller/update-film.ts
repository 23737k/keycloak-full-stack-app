/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilmReq } from '../../models/film-req';
import { FilmRes } from '../../models/film-res';

export interface UpdateFilm$Params {
  id: number;
      body: FilmReq
}

export function updateFilm(http: HttpClient, rootUrl: string, params: UpdateFilm$Params, context?: HttpContext): Observable<StrictHttpResponse<FilmRes>> {
  const rb = new RequestBuilder(rootUrl, updateFilm.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

updateFilm.PATH = '/api/films/{id}';
