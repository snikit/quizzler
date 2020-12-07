import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePhotoComponent } from './candidate-photo.component';

describe('CandidatePhotoComponent', () => {
  let component: CandidatePhotoComponent;
  let fixture: ComponentFixture<CandidatePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
