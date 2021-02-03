import { Injectable } from '@angular/core';
import * as actions from '../actions/song.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PlaylistDataService } from '../services/playlist-data.service';
import { of } from 'rxjs';

@Injectable()
export class SongEffects {

  //action.songAdded => songAddedSuccessfully || songAddedFailure
  addSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.songAdded),
      switchMap(originalAction => this.service.addASong(originalAction.payload)
        .pipe(
          map(response => actions.songAddedSuccessfully({
            oldId: originalAction.payload.id,
            payload: response
          })),
          catchError(response => of(actions.songAddedFailure({
            oldId: originalAction.payload.id,
            errorMessage: `Sorry, could not save the song ${originalAction.payload.title}`
          }))
          ))
      )
    ))

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSongs),
      switchMap(() => this.service.getAll()
        .pipe(
          map(response => actions.loadSongsSucceeded({ payload: response }))
        )
      )
    )
    , { dispatch: true })

  constructor(
    private actions$: Actions,
    private service: PlaylistDataService,
  ) { }
}
