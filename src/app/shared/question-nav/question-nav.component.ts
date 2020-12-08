import { Test } from './../../data/model/question.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-question-nav',
  templateUrl: './question-nav.component.html',
  styleUrls: ['./question-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionNavComponent implements OnInit {
  @Input()
  public test: Test = {
    title: 'Title',
    subtitle: 'Subtitle',
    timer: 0,
    instruction: null,
    sections: null,
  };

  @Output()
  submitClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitClick.emit();
  }
}
