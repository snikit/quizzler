import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTestDetailsComponent } from './candidate-test-details.component';

describe('CandidateTestDetailsComponent', () => {
  let component: CandidateTestDetailsComponent;
  let fixture: ComponentFixture<CandidateTestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateTestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
