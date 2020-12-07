import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateNavComponent } from './candidate-nav.component';

describe('CandidateNavComponent', () => {
  let component: CandidateNavComponent;
  let fixture: ComponentFixture<CandidateNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
