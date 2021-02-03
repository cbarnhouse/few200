import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SongSummaryModel } from '../../models/song-summary-item';

@Component({
  selector: 'app-song-summary-list',
  templateUrl: './song-summary-list.component.html',
  styleUrls: ['./song-summary-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongSummaryListComponent implements OnInit {

  @Input() list: SongSummaryModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
