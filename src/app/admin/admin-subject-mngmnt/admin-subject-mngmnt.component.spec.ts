import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubjectMngmntComponent } from './admin-subject-mngmnt.component';

describe('AdminSubjectMngmntComponent', () => {
  let component: AdminSubjectMngmntComponent;
  let fixture: ComponentFixture<AdminSubjectMngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubjectMngmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubjectMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
