import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { RowPureComponent } from './components/pures/row-pure/row-pure.component';
import { StateDirective } from './directives/state.directive';
import { SearchTableComponent } from './components/pures/search-table/search-table.component';
import { PaginationTableComponent } from './components/pures/pagination-table/pagination-table.component';
import { ModalEditComponent } from './components/pures/modal-edit/modal-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    RowPureComponent,
    StateDirective,
    SearchTableComponent,
    PaginationTableComponent,
    ModalEditComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, NgbModal],
})
export class AppModule {}
