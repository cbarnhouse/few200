import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { applicationStarted } from './actions/app.action';
import { AppState } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'few200';

  constructor(private store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }
}
