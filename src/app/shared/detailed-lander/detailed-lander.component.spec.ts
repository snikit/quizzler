import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedLanderComponent } from './detailed-lander.component';

describe('DetailedLanderComponent', () => {
  let component: DetailedLanderComponent;
  let fixture: ComponentFixture<DetailedLanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedLanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedLanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
