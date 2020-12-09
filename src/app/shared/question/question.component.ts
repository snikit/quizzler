import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Question } from 'src/app/data/model/quiz.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  @Input()
  public question: Question;

  activeIndex = -1;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number): void {
    this.activeIndex = index;
  }
}
