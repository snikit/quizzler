import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMngmntComponent } from './common-mngmnt.component';

describe('CommonMngmntComponent', () => {
  let component: CommonMngmntComponent;
  let fixture: ComponentFixture<CommonMngmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonMngmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
