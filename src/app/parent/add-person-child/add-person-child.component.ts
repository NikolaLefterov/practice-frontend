import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../entities/Person';
import {RegisterServices} from './register.services';
import {BsModalComponent} from 'ng2-bs3-modal';
import {SharedServices} from '../sharedServices/shared.services';

@Component({
  selector: 'app-add-person-child',
  templateUrl: './add-person-child.component.html',
  styleUrls: ['./add-person-child.component.css']
})
export class AddPersonChildComponent implements OnInit {
  registerForm: FormGroup;
  @Output() personRegister = new EventEmitter<Person>();
  @ViewChild('registerModal') modal: BsModalComponent;
  constructor(private registerService: RegisterServices, private sharedServices: SharedServices) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      vorname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]),
      telefon: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(80)]),
    });
  }

  onSubmit() {
    const person = new Person();
    person.name = this.registerForm.value.name;
    person.vorname = this.registerForm.value.vorname;
    person.email = this.registerForm.value.email;
    person.telefon = this.registerForm.value.telefon;
    this.registerService.registerPerson(person).then((resp) => {
      this.personRegister.emit(resp);
      this.modal.close();
      this.sharedServices.sendNewRegisterPerson(resp);
    });
  }

}
