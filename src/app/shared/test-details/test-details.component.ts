import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Quiz } from 'src/app/@data/model/quiz.model';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestDetailsComponent implements OnInit {
  @Input()
  details: Quiz;

  @Output()
  startClick = new EventEmitter();

  counter: { questionCount: number; timeCount: number } = {
    questionCount: 0,
    timeCount: 0,
  };

  constructor() {}

  ngOnInit(): void {
    this.counter = this.details.sections.reduce(
      (counter, section) => {
        return {
          questionCount: counter.questionCount + section.questions.length,
          timeCount: counter.timeCount + section.timer,
        };
      },
      {
        questionCount: 0,
        timeCount: 0,
      }
    );
  }

  onStartClick(): void {
    this.startClick.emit();
  }
}
