import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSummaryListComponent } from './song-summary-list.component';

describe('SongSummaryListComponent', () => {
  let component: SongSummaryListComponent;
  let fixture: ComponentFixture<SongSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
