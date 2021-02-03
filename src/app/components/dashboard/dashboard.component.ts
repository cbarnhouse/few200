import { Component, OnInit } from '@angular/core';
import { ShoppingDataService } from 'src/app/feature/communications/services/shopping-data.service';
import { map } from 'rxjs/operators';
import { CounterDashboard, ShoppingDashboard } from 'src/app/models';
import { Observable } from 'rxjs';
import { AppState, selectCounterDashboard } from 'src/app/reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  counterStuff$: Observable<CounterDashboard>
  stuff$: Observable<ShoppingDashboard>;
  constructor(
    private shoppingService: ShoppingDataService,
    private store: Store<AppState>) { }

  ngOnInit(): void {

    this.counterStuff$ = this.store.select(selectCounterDashboard);
    this.stuff$ = this.shoppingService.getObservable()
      .pipe(
        map(items => {
          return {
            totalItems: items.length,
            purchasedItems: items.filter(i => i.purchased === true).length,
            unpurchasedItems: items.filter(i => i.purchased === false).length
          } as ShoppingDashboard;
        })
      );
  }

}
