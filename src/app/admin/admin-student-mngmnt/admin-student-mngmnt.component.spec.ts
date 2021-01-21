import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentMngmntComponent } from './admin-student-mngmnt.component';

describe('AdminStudentMngmntComponent', () => {
  let component: AdminStudentMngmntComponent;
  let fixture: ComponentFixture<AdminStudentMngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudentMngmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
