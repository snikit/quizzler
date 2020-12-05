import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNavComponent } from './question-nav.component';

describe('QuestionNavComponent', () => {
  let component: QuestionNavComponent;
  let fixture: ComponentFixture<QuestionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
