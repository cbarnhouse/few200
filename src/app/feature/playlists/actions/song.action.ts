import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

let currentId = 1;
//initiating action
export const songAdded = createAction(
  '[playlists songs] song added request',
  ({ title, artist, album }: { title: string, artist: string, album?: string }) => ({
    payload: {
      id: 'TEMP' + currentId++,
      title,
      artist,
      album
    } as SongEntity
  })
);

//win
export const songAddedSuccessfully = createAction(
  '[playlist songs] song added successfully',
  props<{ oldId: string, payload: SongEntity }>()
);

//lose
export const songAddedFailure = createAction(
  '[playlist songs] song added failure',
  props<{ oldId: string, errorMessage: string }>()
);





//initiating action
export const loadSongs = createAction(
  '[playlist songs] load the songs from the api'
);

// win
export const loadSongsSucceeded = createAction(
  '[playlist songs] loading the songs succeded',
  props<{ payload: SongEntity[] }>()
);

// lose
export const loadSongsFailed = createAction(
  '[playlists songs] loading the songs failed',
  props<{ errorMessage: string }>()
);
