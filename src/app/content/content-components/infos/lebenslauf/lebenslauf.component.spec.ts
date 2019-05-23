import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LebenslaufComponent } from './lebenslauf.component';

describe('LebenslaufComponent', () => {
  let component: LebenslaufComponent;
  let fixture: ComponentFixture<LebenslaufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LebenslaufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LebenslaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
