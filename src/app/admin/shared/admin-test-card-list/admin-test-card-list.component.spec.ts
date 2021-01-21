import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestCardListComponent } from './admin-test-card-list.component';

describe('AdminTestCardListComponent', () => {
  let component: AdminTestCardListComponent;
  let fixture: ComponentFixture<AdminTestCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTestCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
