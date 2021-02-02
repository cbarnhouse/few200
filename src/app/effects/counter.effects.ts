import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';
import * as actions from '../actions/counter.action'
import * as appActions from '../actions/app.action';

@Injectable()
export class CounterEffects {

  // when we get an applicationStarted
  // check localStorage for 'by'
  // If it is there
  //  - turn it into a actions.countBySet(by)
  //  - if it isn't there (it is null), don't do anything.
  readSavedCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')), // ('1' | '3' | '5') || null
      filter(by => by !== null), // stop here if it is null. They didn't save anything.
      map(by => parseInt(by, 10)), // ('1' | '3' | '5' ) turn it into a base 10 number from the string => (1 | 3 | 5)
      map(by => actions.countBySet({ by })) // what comes out here gets sent to the reducer.
    )
    , { dispatch: true });



  // logItAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   ), { dispatch: false }
  // );
  // actions.countBySet => save it.  => done!

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    )
    , { dispatch: false });

  constructor(private actions$: Actions) { }
}
