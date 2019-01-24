import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ParentServices} from './parent/parent.services';
import {HttpClientModule} from '@angular/common/http';
import {BsModalRef, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {ChildServices} from './parent/child/childServices';
import {BsModalModule} from 'ng2-bs3-modal';
import {AddPersonChildComponent} from './parent/add-person-child/add-person-child.component';
import {RegisterServices} from './parent/add-person-child/register.services';
import {SharedServices} from './parent/sharedServices/shared.services';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AddPersonChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsModalModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ParentServices, ChildServices, BsModalRef, RegisterServices, SharedServices],
  bootstrap: [AppComponent],
  entryComponents: [ChildComponent]
})
export class AppModule { }
