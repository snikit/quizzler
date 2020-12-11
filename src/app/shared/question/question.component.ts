import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { last } from 'rxjs/operators';
import {
  Question,
  Answer,
  QuestionAnswer,
} from 'src/app/data/model/quiz.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  @Input()
  public question: Question;

  @Output()
  public answerSelect = new EventEmitter<QuestionAnswer>();

  activeIndex = -1;

  constructor() {}

  ngOnInit(): void {
    console.log('inited');
  }

  onClick(answer: Answer, index: number): void {
    this.activeIndex = index;
    this.answerSelect.emit({
      question: {
        id: this.question.id,
      },
      answer: {
        id: answer.id,
      },
    });
  }
}
