import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabCrossButtonComponent } from './fab-cross-button.component';

describe('FabCrossButtonComponent', () => {
  let component: FabCrossButtonComponent;
  let fixture: ComponentFixture<FabCrossButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabCrossButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabCrossButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
