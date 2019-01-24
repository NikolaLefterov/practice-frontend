import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Person} from '../../entities/Person';

@Injectable()
export class SharedServices {
  private subject = new Subject<any>();

  sendNewRegisterPerson(person: Person) {
    this.subject.next({person: person});
  }

  getNewPerson(): Observable<any> {
    return this.subject.asObservable();
  }
}
