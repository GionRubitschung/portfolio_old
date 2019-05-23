import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberMichComponent } from './ueber-mich.component';

describe('UeberMichComponent', () => {
  let component: UeberMichComponent;
  let fixture: ComponentFixture<UeberMichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeberMichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeberMichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
