import { Question, Quiz } from 'src/app/data/model/quiz.model';
import { Component, OnInit } from '@angular/core';
import { QuizStoreService } from 'src/app/store/quiz/quiz.store.service';
import { takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  templateUrl: './candidate-test.component.html',
  styleUrls: ['./candidate-test.component.css'],
})
export class CandidateTestComponent implements OnInit {
  questionId: string;
  question: Question = {
    id: 1,
    text: 'Quis sit dolor tempor fugiat fugiat culpa qui?',
    answers: [
      {
        Index: 0,
        text: 'Correct',
      },
      {
        Index: 1,
        text: 'Incorrect',
      },
      {
        Index: 2,
        text: 'Incorrect',
      },
      {
        Index: 3,
        text: 'Incorrect',
      },
    ],
  };
  isAnswered: Subject<string> = new Subject<string>();
  destroy$: Subject<{}> = new Subject(); // Managing Unsubscription
  details$ = new Observable<Quiz>();

  constructor(private quizStore: QuizStoreService) {
    this.details$ = this.quizStore.quizDetails;

    // this.quizStore.currentQuestion
    //   .pipe(
    //     tap(() => this.isAnswered.next(null)),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe((q) => (this.question = q));
  }

  ngOnInit(): void {}

  visibleSidebar = false;

  onSubmit(): void {
    this.visibleSidebar = !this.visibleSidebar;
  }
}
