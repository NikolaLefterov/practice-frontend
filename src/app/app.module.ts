import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';
import {FormsModule} from '@angular/forms';
import {ParentServices} from './parent/parent.services';
import {HttpClientModule} from '@angular/common/http';
import {BsModalRef, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {ChildServices} from './parent/child/childServices';
import {BsModalModule} from 'ng2-bs3-modal';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsModalModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ParentServices, ChildServices, BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [ChildComponent]
})
export class AppModule { }
