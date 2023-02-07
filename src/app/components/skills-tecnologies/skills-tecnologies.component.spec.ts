import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTecnologiesComponent } from './skills-tecnologies.component';

describe('SkillsTecnologiesComponent', () => {
  let component: SkillsTecnologiesComponent;
  let fixture: ComponentFixture<SkillsTecnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsTecnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsTecnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
