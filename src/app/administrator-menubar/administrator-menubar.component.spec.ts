import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMenubarComponent } from './administrator-menubar.component';

describe('AdministratorMenubarComponent', () => {
  let component: AdministratorMenubarComponent;
  let fixture: ComponentFixture<AdministratorMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
