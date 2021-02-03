import { createAction } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

let currentId = 1;
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
