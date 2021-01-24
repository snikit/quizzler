import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCreateOrEditComponent } from './topic-create-or-edit.component';

describe('TopicCreateOrEditComponent', () => {
  let component: TopicCreateOrEditComponent;
  let fixture: ComponentFixture<TopicCreateOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCreateOrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
