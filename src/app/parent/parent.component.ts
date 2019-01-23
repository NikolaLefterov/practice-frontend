import {Component, OnInit} from '@angular/core';
import {Person} from '../entities/Person';
import {ParentServices} from './parent.services';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  person: Person = null;
  constructor(private _parentServices: ParentServices) { }

  ngOnInit() {
    this._parentServices.getFirstPerson().then((resp) => {
      this.person = resp;
    });
  }

  PersonDataChange(person: Person) {
    this.person = person;
  }
}
