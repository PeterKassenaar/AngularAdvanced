// app.resolver.service.ts
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiResolverService implements Resolve<Observable<any>> {

  // Talk to external API
  url = 'https://randomuser.me/api/?results=10';

  constructor(private  http: HttpClient) {
  }

  resolve() {
    return this.http.get<any>(this.url);
  }

}
