import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseMngmntComponent } from './admin-course-mngmnt.component';

describe('AdminCourseMngmntComponent', () => {
  let component: AdminCourseMngmntComponent;
  let fixture: ComponentFixture<AdminCourseMngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourseMngmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
