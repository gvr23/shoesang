import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import * as fromApp from '../../reducers/app.reducer';
import {SetFilter} from '../../actions/stock.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  filter = '';
  faSearch = faSearch;
  faTimesCircle = faTimesCircle;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {}

  ngAfterContentChecked(): void {
    this.store.dispatch(new SetFilter(this.filter));
  }

  onDelete = () => this.filter = '';
}
