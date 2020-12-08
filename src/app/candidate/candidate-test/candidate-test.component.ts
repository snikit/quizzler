import { Question, Test } from './../../data/model/question.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './candidate-test.component.html',
  styleUrls: ['./candidate-test.component.css'],
})
export class CandidateTestComponent implements OnInit {
  public question: Question = {
    id: 0,
    text:
      'Ever wondered how to style checkboxes and radio buttons, but withoutJavaScript? Thanks to CSS3 you can! Here’s what we’re going to build (note: to learn how to make these accessible, check out this tutorial too)?',
    options: [
      {
        text: 'Ever wondered ',
      },
      { text: 'Second Option' },
      { text: 'Third Option' },
      { text: 'Fourth Option' },
    ],
  };

  public test: Test = {
    title: 'MCT Mock Test',
    subtitle: 'Session 1',
    timer: 0,
    sections: null,
    instruction: null,
  };

  constructor() {}

  ngOnInit(): void {}
}
