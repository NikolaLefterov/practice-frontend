import {Component, OnInit, ViewChild} from '@angular/core';
import {Person} from '../entities/Person';
import {ParentServices} from './parent.services';
import {AddPersonChildComponent} from './add-person-child/add-person-child.component';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  person: Person = new Person();
  @ViewChild(AddPersonChildComponent) addPersonModal: AddPersonChildComponent;
  @ViewChild(ChildComponent) changeModal: ChildComponent;
  constructor(private _parentServices: ParentServices) { }

  ngOnInit() {
    this._parentServices.getFirstPerson().then((resp) => {
      this.person = resp;
    });
  }

  personDataChange(person: Person) {
    this.person = person;
  }

  openAddPerson() {
    this.addPersonModal.modal.open();
  }

  openChangePersons() {
    this.changeModal.modal.open();
  }
}
