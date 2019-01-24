import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonChildComponent } from './add-person-child.component';

describe('AddPersonChildComponent', () => {
  let component: AddPersonChildComponent;
  let fixture: ComponentFixture<AddPersonChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
