import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { SongEntryComponent } from './containers/song-entry/song-entry.component';
import { SongListComponent } from './containers/song-list/song-list.component';
import { SongSummaryListComponent } from './components/song-summary-list/song-summary-list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';



@NgModule({
  declarations: [PlaylistsComponent, SongEntryComponent, SongListComponent, SongSummaryListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [PlaylistsComponent]
})
export class PlaylistsModule { }
