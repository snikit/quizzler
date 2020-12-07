import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestDetailsComponent implements OnInit {
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
}
