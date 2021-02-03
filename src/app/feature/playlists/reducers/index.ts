import * as fromSongs from './songs.reducer'
import { ActionReducerMap } from '@ngrx/store'
import { PlaylistsComponent } from '../playlists.component'


export const featureName = "playlistFeature";

export interface PlaylistState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<PlaylistState> = {
  songs: fromSongs.reducer
}
