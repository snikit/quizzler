import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestmakerComponent } from './admin-testmaker.component';

describe('AdminTestmakerComponent', () => {
  let component: AdminTestmakerComponent;
  let fixture: ComponentFixture<AdminTestmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTestmakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
