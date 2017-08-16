import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class RemoteService {

	constructor(private http: Http) {
	}

	// Get fake people
	public getPeople(): Observable<any> {
		return this.http
			.get('someEndPoint/somePeople.json')
			.map(result => result.json());
	}

	// Get fake first name
	public getFirstName(): Observable<any> {
		return this.http
			.get('someEndPoint/somePeople.json')
			.map(result => result.json())
			.map(result => result[0].name);
	}
}