import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicMngmntComponent } from './admin-topic-mngmnt.component';

describe('AdminTopicMngmntComponent', () => {
  let component: AdminTopicMngmntComponent;
  let fixture: ComponentFixture<AdminTopicMngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTopicMngmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopicMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
