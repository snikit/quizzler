import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
