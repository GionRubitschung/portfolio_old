import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouterOutletComponent } from './admin-router-outlet.component';

describe('AdminRouterOutletComponent', () => {
  let component: AdminRouterOutletComponent;
  let fixture: ComponentFixture<AdminRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
