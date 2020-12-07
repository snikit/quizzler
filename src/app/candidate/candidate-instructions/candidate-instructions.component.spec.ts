import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInstructionsComponent } from './candidate-instructions.component';

describe('CandidateInstructionsComponent', () => {
  let component: CandidateInstructionsComponent;
  let fixture: ComponentFixture<CandidateInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
