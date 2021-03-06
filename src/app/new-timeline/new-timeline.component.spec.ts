import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimelineComponent } from './new-timeline.component';

describe('NewTimelineComponent', () => {
  let component: NewTimelineComponent;
  let fixture: ComponentFixture<NewTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
