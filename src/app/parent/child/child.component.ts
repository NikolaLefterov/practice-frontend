import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Person} from '../../entities/Person';
import {ChildServices} from './childServices';
import {BsModalComponent} from 'ng2-bs3-modal';
import {Subscription} from 'rxjs';
import {SharedServices} from '../sharedServices/shared.services';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  persons: Person[] = [];
  ascName = true;
  ascVorname = true;
  ascEmail = true;
  subscription: Subscription;
  @Output() personChange = new EventEmitter<Person>();
  @ViewChild('modal') modal: BsModalComponent;
  constructor(private _childServices: ChildServices, private _sharedServices: SharedServices) { }

  ngOnInit() {
    this._childServices.getAllPersons().then((resp) => {
      this.persons = resp;
    });
    this.subscription = this._sharedServices.getNewPerson().subscribe(person => {
      this.persons.push(person.person);
    });
  }

  emitEventToParent(person: Person) {
    this.personChange.emit(person);
    this.modal.close();
  }

  sortColumn(property) {
    this.persons.sort(this.dynamicSort(property));
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (property === 'name') {
      if (!this.ascName) {
        sortOrder = -1;
      }
      this.ascName = !this.ascName;
    } else if (property === 'vorname') {
      if (!this.ascVorname) {
        sortOrder = -1;
      }
      this.ascVorname = !this.ascVorname;
    } else {
      if (!this.ascEmail) {
        sortOrder = -1;
      }
      this.ascEmail = !this.ascEmail;
    }
    return function (a, b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }

  deletePerson(id: string) {
    this._childServices.deletePerson(id).then((resp) => {
      this.persons = resp;
    });
  }
}
