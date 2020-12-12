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
  public _question: Question;

  @Output()
  public answerSelect = new EventEmitter<QuestionAnswer>();

  activeIndex = -1;

  constructor() {}

  @Input()
  set question(question: Question) {
    this._question = question;
    this.activeIndex = -1;
  }

  get question() {
    return this._question;
  }

  ngOnInit(): void {}

  onClick(answer: Answer, index: number): void {
    this.activeIndex = index;
    this.answerSelect.emit({
      // question: {
      //   id: this._question.id,
      // },
      answer: {
        id: answer.id,
      },
    });
  }
}
