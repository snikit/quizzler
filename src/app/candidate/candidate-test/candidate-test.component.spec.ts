import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTestComponent } from './candidate-test.component';

describe('CandidateTestComponent', () => {
  let component: CandidateTestComponent;
  let fixture: ComponentFixture<CandidateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
