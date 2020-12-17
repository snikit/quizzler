import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Question, Quiz } from 'src/app/@data/model/quiz.model';

@Component({
  selector: 'app-questioner',
  templateUrl: './questioner.component.html',
  styleUrls: ['./questioner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionerComponent implements OnInit {
  @Input()
  public question: Question;
  @Input()
  public quiz: Quiz;

  visibleSidebar = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.visibleSidebar = !this.visibleSidebar;
  }
}
