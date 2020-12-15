import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLanderComponent } from './section-lander.component';

describe('SectionLanderComponent', () => {
  let component: SectionLanderComponent;
  let fixture: ComponentFixture<SectionLanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
