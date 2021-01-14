import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithSearchComponent } from './title-with-search.component';

describe('TitleWithSearchComponent', () => {
  let component: TitleWithSearchComponent;
  let fixture: ComponentFixture<TitleWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleWithSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
