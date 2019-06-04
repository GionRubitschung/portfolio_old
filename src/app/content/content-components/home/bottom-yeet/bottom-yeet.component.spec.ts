import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomYeetComponent } from './bottom-yeet.component';

describe('BottomYeetComponent', () => {
  let component: BottomYeetComponent;
  let fixture: ComponentFixture<BottomYeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomYeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomYeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
