import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateIdPhotoComponent } from './candidate-id-photo.component';

describe('CandidateIdPhotoComponent', () => {
  let component: CandidateIdPhotoComponent;
  let fixture: ComponentFixture<CandidateIdPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateIdPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateIdPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
