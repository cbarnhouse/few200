import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countBySet } from 'src/app/actions/counter.action';
import { AppState, selectCounterBy } from 'src/app/reducer';

@Component({
  selector: 'app-countby',
  templateUrl: './countby.component.html',
  styleUrls: ['./countby.component.scss']
})
export class CountbyComponent implements OnInit {

  by$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.by$ = this.store.select(selectCounterBy);
  }

  countBy(by: number): void {
    this.store.dispatch(countBySet({ by }));
  }

}
