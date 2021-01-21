import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestSkeletonCardListComponent } from './admin-test-skeleton-card-list.component';

describe('AdminTestSkeletonCardListComponent', () => {
  let component: AdminTestSkeletonCardListComponent;
  let fixture: ComponentFixture<AdminTestSkeletonCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTestSkeletonCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestSkeletonCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
