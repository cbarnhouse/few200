import { Component, OnInit } from '@angular/core';
import { SongSummaryModel } from '../../models/song-summary-item';

@Component({
  selector: 'app-song-summary-list',
  templateUrl: './song-summary-list.component.html',
  styleUrls: ['./song-summary-list.component.scss']
})
export class SongSummaryListComponent implements OnInit {

  list: SongSummaryModel[] = [
    { id: '1', title: "Do you dig u?", artist: "Q-Tip", album: "Kernel and whatever" },
    { id: '2', title: "Jaws Theme", artist: "John Williams" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
