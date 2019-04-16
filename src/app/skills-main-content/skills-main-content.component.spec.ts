import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMainContentComponent } from './skills-main-content.component';

describe('SkillsMainContentComponent', () => {
  let component: SkillsMainContentComponent;
  let fixture: ComponentFixture<SkillsMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
