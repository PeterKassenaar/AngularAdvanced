// user.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

// Angular 6 treeshakable service, w/ 'providedIn'
@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(`${environment.base_url}/users`);
  }

  getUser(id: number) {
    // TODO...
  }

  // talk to 'real' API, https://randomuser.me
  getRandomUsers(numResults: number = 10) {
    return this.http.get<any[]>(`https://randomuser.me/api/?results=${numResults}`)
      .pipe(
        map((data: any) => data.results)
      );
  }
}
