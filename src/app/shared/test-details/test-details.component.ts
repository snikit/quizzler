import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Quiz } from 'src/app/data/model/quiz.model';

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

  sessions = [
    {
      title: 'session 1',
      noOfQuestions: '20',
      time: '10 mins',
    },
    {
      title: 'session 2',
      noOfQuestions: '20',
      time: '10 mins',
    },
    {
      title: 'session 3',
      noOfQuestions: '20',
      time: '10 mins',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onStartClick(): void {
    this.startClick.emit();
  }
}
