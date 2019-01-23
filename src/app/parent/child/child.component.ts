import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Person} from '../../entities/Person';
import {ChildServices} from './childServices';
import {BsModalComponent} from 'ng2-bs3-modal';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  persons: Person[] = [];
  asc = true;
  @Output() personChange = new EventEmitter<Person>();
  @ViewChild('modal') modal: BsModalComponent;
  constructor(private _childServices: ChildServices) { }

  ngOnInit() {
    this._childServices.getAllPersons().then((resp) => {
      this.persons = resp;
    });
  }

  emitEventToParent(person: Person) {
    this.personChange.emit(person);
    this.modal.close();
  }

  sortColum(property) {
    this.persons.sort(this.dynamicSort(property));
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (this.asc) {
      sortOrder = -1;
    }
    this.asc = !this.asc;
    return function (a, b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }
}
