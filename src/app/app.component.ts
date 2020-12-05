import { Question, Test } from './data/model/question.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quizzler';
  public question: Question = {
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
    timer: '00:00 min',
  };
}
