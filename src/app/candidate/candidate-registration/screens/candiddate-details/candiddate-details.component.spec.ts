import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiddateDetailsComponent } from './candiddate-details.component';

describe('CandiddateDetailsComponent', () => {
  let component: CandiddateDetailsComponent;
  let fixture: ComponentFixture<CandiddateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandiddateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiddateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
