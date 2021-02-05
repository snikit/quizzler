import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCreateOrEditComponent } from './section-create-or-edit.component';

describe('SectionCreateOrEditComponent', () => {
  let component: SectionCreateOrEditComponent;
  let fixture: ComponentFixture<SectionCreateOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCreateOrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
