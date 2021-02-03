import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongEntryFormComponent } from './song-entry-form.component';

describe('SongEntryFormComponent', () => {
  let component: SongEntryFormComponent;
  let fixture: ComponentFixture<SongEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongEntryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
