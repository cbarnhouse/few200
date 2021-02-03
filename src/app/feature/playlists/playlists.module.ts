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
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { SongEffects } from './effects/song.effects';
import { AppEffects } from './effects/app.effects';
import { PlaylistDataService } from './services/playlist-data.service';



@NgModule({
  declarations: [PlaylistsComponent, SongEntryComponent, SongListComponent, SongSummaryListComponent, SongEntryFormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AppEffects, SongEffects])
  ],
  exports: [PlaylistsComponent],
  providers: [PlaylistDataService]
})
export class PlaylistsModule { }
