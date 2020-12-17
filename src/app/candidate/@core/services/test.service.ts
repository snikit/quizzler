import { Injectable } from '@angular/core';
import { asapScheduler, Observable, scheduled } from 'rxjs';
import { Test } from 'src/app/data/model/question.model';

@Injectable()
export class TestService {
  constructor() {}

  public getTestById(testId: string): Observable<Test> {
    return scheduled<Test>(
      [
        {
          title: 'MCT Test',
          subtitle: 'Session 1',
          timer: 30,
          instruction: {
            title: 'Things to Remember',
            content: `
        <ul>
        <li>
          Before starting test close all chat windows, screen shot etc and make
          sure you have a stable internet connection
        </li>
        <li>
          Pressing F5 during the test will close your test and you will not be
          able to enter again
        </li>
        <li>
          If you computer shuts down you will able to continue again from the
          place you left
        </li>
        <li>Your test will open in a new window</li>
        <li>When resuming, please start your test as you did earlier</li>
      </ul>`,
          },
          sections: [
            {
              title: 'Section 1',
              timer: 10,
              noOfQuestions: 10,
              type: 'mcq',
            },
          ],
        },
      ],
      asapScheduler
    );
  }
}
