import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  Answer,
  Question,
  QuestionAnswer,
} from 'src/app/@data/model/quiz.model';

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

  @Output()
  public bookmarkToggle = new EventEmitter<boolean>();

  @Input()
  public showBookmark;

  activeIndex = -1;

  pinned = false;

  constructor() {}

  @Input()
  set question(question: Question) {
    this._question = question;

    if (question.isAnswered) {
      this.activeIndex = question.answers.findIndex((ans) => {
        return ans.id === question.userAnswer.answer.id;
      });
    } else {
      this.activeIndex = -1;
    }
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

  bookmarkClick(checked: boolean) {
    this.bookmarkToggle.emit(checked);
  }
}
