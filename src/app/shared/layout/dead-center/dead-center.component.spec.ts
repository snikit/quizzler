import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadCenterComponent } from './dead-center.component';

describe('DeadCenterComponent', () => {
  let component: DeadCenterComponent;
  let fixture: ComponentFixture<DeadCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
