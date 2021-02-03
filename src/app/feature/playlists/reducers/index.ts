import * as fromSongs from './songs.reducer'
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store'
import { PlaylistsComponent } from '../playlists.component'
import * as models from '../models';

export const featureName = "playlistFeature";

export interface PlaylistState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<PlaylistState> = {
  songs: fromSongs.reducer
}

// feature selector
const selectFeature = createFeatureSelector<PlaylistState>(featureName);

// branch selector (songs in this ex)
const selectSongsBranch = createSelector(
  selectFeature,
  f => f.songs
)

// helpers
const { selectAll: selectSongArray } = fromSongs.adapter.getSelectors(selectSongsBranch);

export const selectSongListModel = createSelector(
  selectSongArray,
  songs => songs.map(song => {
    return {
      ...song,
      isSaved: !song.id.startsWith('TEMP')
    } as models.SongSummaryModel;
  })
)
