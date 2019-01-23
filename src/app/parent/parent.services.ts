import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from '../entities/Person';


@Injectable()
export class ParentServices {
  constructor(private _http: HttpClient) {
  }

  getFirstPerson() {
    const contentHeaders = new HttpHeaders();
    contentHeaders.set('Authorization', 'Your token used in app');
    contentHeaders.set('Content-Type', 'application/json');
    contentHeaders.set('Access-Control-Allow-Origin', '*');
    return this._http.get('api/person/first', {
      headers: contentHeaders
    }).toPromise()
      .then(response => response as Person);
  }
}
