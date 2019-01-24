import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

// local interface to mock stuff
export interface Person {
  name:string,
  email:string
}

// The service to test
@Injectable()
export class RemoteService {

  url: string = 'someEndPoint/somePeople.json';

	constructor(private http: HttpClient) {
	}

	// Get fake people
	public getPeople(): Observable<Person[]> {
		return this.http
			.get<Person[]>(this.url)
	}

	// Get fake first name
	public getFirstName(): Observable<string> {
		return this.http
			.get<Person[]>(this.url)
			.map(result => result[0].name);
	}
}
