import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Quiz } from 'src/app/data/model/quiz.model';

@Component({
  selector: 'app-question-nav',
  templateUrl: './question-nav.component.html',
  styleUrls: ['./question-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionNavComponent implements OnInit {
  @Input()
  public quiz: Quiz;
  @Output()
  navReviewButtonClick = new EventEmitter();

  @Input()
  progress: number;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.navReviewButtonClick.emit();
  }
}
