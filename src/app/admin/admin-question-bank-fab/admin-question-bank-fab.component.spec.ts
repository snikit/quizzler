import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionBankFabComponent } from './admin-question-bank-fab.component';

describe('AdminQuestionBankFabComponent', () => {
  let component: AdminQuestionBankFabComponent;
  let fixture: ComponentFixture<AdminQuestionBankFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuestionBankFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionBankFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
