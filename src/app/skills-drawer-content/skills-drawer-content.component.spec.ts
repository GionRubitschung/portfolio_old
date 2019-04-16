import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDrawerContentComponent } from './skills-drawer-content.component';

describe('SkillsDrawerContentComponent', () => {
  let component: SkillsDrawerContentComponent;
  let fixture: ComponentFixture<SkillsDrawerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDrawerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDrawerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
