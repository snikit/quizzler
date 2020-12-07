import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTestHomeComponent } from './candidate-test-home.component';

describe('CandidateTestHomeComponent', () => {
  let component: CandidateTestHomeComponent;
  let fixture: ComponentFixture<CandidateTestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateTestHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
