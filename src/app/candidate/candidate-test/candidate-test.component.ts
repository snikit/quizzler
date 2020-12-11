import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Question, QuestionAnswer, Quiz } from 'src/app/data/model/quiz.model';
import { QuizStoreService } from 'src/app/store/quiz/quiz.store.service';

@Component({
  templateUrl: './candidate-test.component.html',
  styleUrls: ['./candidate-test.component.css'],
})
export class CandidateTestComponent implements OnInit, OnDestroy {
  questionId: string;
  question: Question;
  isAnswered: Subject<string> = new Subject<string>();
  destroy$: Subject<{}> = new Subject(); // Managing Unsubscription
  details: Quiz;
  storeState$: Observable<any>;

  constructor(private quizStore: QuizStoreService) {
    this.storeState$ = this.quizStore.getState();

    this.quizStore.quizDetails.subscribe((details) => (this.details = details));

    this.quizStore.currentQuestion
      .pipe(
        tap(() => this.isAnswered.next(null)),
        takeUntil(this.destroy$)
      )
      .subscribe((q) => (this.question = q));
  }

  ngOnInit(): void {}

  visibleSidebar = false;

  onSubmit(): void {
    this.visibleSidebar = !this.visibleSidebar;
  }

  nextQuestion() {
    this.quizStore.nextQuestion();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.isAnswered.unsubscribe();
    this.destroy$.unsubscribe();
  }

  onAnswerSelect($event: QuestionAnswer) {
    this.quizStore.saveAnswer($event);
  }
}
