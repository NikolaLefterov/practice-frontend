import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from '../../entities/Person';


@Injectable()
export class RegisterServices {
  constructor(private _http: HttpClient) {
  }

  registerPerson(person: Person) {
    const contentHeaders = new HttpHeaders();
    contentHeaders.set('Content-Type', 'application/json');
    contentHeaders.set('Access-Control-Allow-Origin', '*');
    return this._http.post('api/person/register', person, {
      headers: contentHeaders
    }).toPromise()
      .then(response => response as Person);
  }
}
