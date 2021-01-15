import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMngmntComponent } from './admin-mngmnt.component';

describe('AdminMngmntComponent', () => {
  let component: AdminMngmntComponent;
  let fixture: ComponentFixture<AdminMngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMngmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
