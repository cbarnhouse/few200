import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountbyComponent } from './countby.component';

describe('CountbyComponent', () => {
  let component: CountbyComponent;
  let fixture: ComponentFixture<CountbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
