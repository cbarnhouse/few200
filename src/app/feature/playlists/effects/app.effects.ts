import { Injectable } from '@angular/core';
import * as actions from '../actions/song.action';
import * as appActions from '../../../actions/app.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction } from '@ngrx/store';
import { map } from 'rxjs/operators';
@Injectable()
export class AppEffects {

  percolateError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.songAddedFailure),
      map(e => appActions.applicationError({
        feature: 'Playlists',
        error: e.errorMessage
      }))
    )
  )

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => actions.loadSongs())
    )
  );

  constructor(private actions$: Actions) { }
}
