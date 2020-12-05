import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPrevComponent } from './next-prev.component';

describe('NextPrevComponent', () => {
  let component: NextPrevComponent;
  let fixture: ComponentFixture<NextPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
