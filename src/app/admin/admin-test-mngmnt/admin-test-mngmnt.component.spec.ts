import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestMngmntComponent } from './admin-test-mngmnt.component';

describe('AdminTestMngmntComponent', () => {
  let component: AdminTestMngmntComponent;
  let fixture: ComponentFixture<AdminTestMngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTestMngmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
