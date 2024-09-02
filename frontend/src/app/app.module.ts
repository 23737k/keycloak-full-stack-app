import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { FilmComponent } from './pages/film/film.component';
import {KeycloakService} from "./keycloak/keycloak.service";
import {httpTokenInterceptor} from "./services/interceptor/http-token.interceptor";

export function kcFactory(kcService:KeycloakService){
  return () => kcService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptors([httpTokenInterceptor])),
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
