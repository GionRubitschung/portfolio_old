import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnterlagenComponent } from './unterlagen.component';

describe('UnterlagenComponent', () => {
  let component: UnterlagenComponent;
  let fixture: ComponentFixture<UnterlagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnterlagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnterlagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
