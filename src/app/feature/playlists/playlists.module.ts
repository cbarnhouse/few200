import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { SongEntryComponent } from './containers/song-entry/song-entry.component';
import { SongListComponent } from './containers/song-list/song-list.component';
import { SongSummaryListComponent } from './components/song-summary-list/song-summary-list.component';



@NgModule({
  declarations: [PlaylistsComponent, SongEntryComponent, SongListComponent, SongSummaryListComponent],
  imports: [
    CommonModule
  ],
  exports: [PlaylistsComponent]
})
export class PlaylistsModule { }
