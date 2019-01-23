import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from '../../entities/Person';


@Injectable()
export class ChildServices {
  constructor(private _http: HttpClient) {
  }

  getAllPersons() {
    const contentHeaders = new HttpHeaders();
    contentHeaders.set('Authorization', 'Your token used in app');
    contentHeaders.set('Content-Type', 'application/json');
    contentHeaders.set('Access-Control-Allow-Origin', '*');
    return this._http.get('api/person/all', {
      headers: contentHeaders
    }).toPromise()
      .then(response => response as Person []);
  }
}
