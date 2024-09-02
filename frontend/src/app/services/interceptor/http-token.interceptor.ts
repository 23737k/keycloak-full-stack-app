import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {KeycloakService} from "../../keycloak/keycloak.service";

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloak = inject(KeycloakService);
  const token: string | undefined = keycloak.token;

  if(token){
    const authReq = req.clone({
      headers : new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
    return next(authReq);
  }

  return next(req);
};
