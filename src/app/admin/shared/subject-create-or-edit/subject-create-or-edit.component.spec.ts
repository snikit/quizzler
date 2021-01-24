import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCreateOrEditComponent } from './subject-create-or-edit.component';

describe('SubjectCreateOrEditComponent', () => {
  let component: SubjectCreateOrEditComponent;
  let fixture: ComponentFixture<SubjectCreateOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCreateOrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
