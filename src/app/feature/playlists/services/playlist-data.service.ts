import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SongEntity } from "../reducers/songs.reducer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class PlaylistDataService {

  readonly baseUrl = environment.playlistUrl;

  constructor(private http: HttpClient) { }

  addASong(request: SongEntity): Observable<SongEntity> {
    const toSend = {
      title: request.title,
      artist: request.artist,
      album: request.album
    };
    return this.http.post<SongEntity>(this.baseUrl, toSend);
  }

  getAll(): Observable<SongEntity[]> {
    return this.http.get<PlaylistResponse>(this.baseUrl)
      .pipe(
        map(response => response.data)
      )
  }
}

interface PlaylistResponse {
  data: SongEntity[];
}





