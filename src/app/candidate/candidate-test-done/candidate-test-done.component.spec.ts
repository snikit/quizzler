import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTestDoneComponent } from './candidate-test-done.component';

describe('CandidateTestDoneComponent', () => {
  let component: CandidateTestDoneComponent;
  let fixture: ComponentFixture<CandidateTestDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateTestDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTestDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
