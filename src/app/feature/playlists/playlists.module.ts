import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { SongEntryComponent } from './containers/song-entry/song-entry.component';
import { SongListComponent } from './containers/song-list/song-list.component';
import { SongSummaryListComponent } from './components/song-summary-list/song-summary-list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { SongEntryFormComponent } from './components/song-entry-form/song-entry-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlaylistsComponent, SongEntryComponent, SongListComponent, SongSummaryListComponent, SongEntryFormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    ReactiveFormsModule
  ],
  exports: [PlaylistsComponent]
})
export class PlaylistsModule { }
