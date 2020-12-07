import { Question, Test } from './../../data/model/question.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

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
  public test: Test;

  visibleSidebar = true;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('dssd');
    this.visibleSidebar = !this.visibleSidebar;
  }
}
