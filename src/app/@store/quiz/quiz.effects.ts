import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Question } from 'src/app/@data/model/quiz.model';
import * as QuizActions from './quiz.actions';
import * as reducer from './quiz.reducer';
import { QuizService } from './quiz.service';

@Injectable()
export class QuizEffects {
  debounce = 300;

  constructor(
    private actions$: Actions,
    private quizService: QuizService,
    private router: Router,
    private store: Store<reducer.Store>
  ) {}

  getQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizActions.GET_QUIZ),
      switchMap(() => {
        return this.quizService.getQuiz().pipe(
          map((results) => {
            return new QuizActions.GetQuizSuccess(results);
          }),
          catchError(() => of(new QuizActions.GetQuizFail()))
        );
      })
    )
  );

  @Effect()
  getQuizSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(QuizActions.GET_QUIZ_SUCCESS),
    map(() => {
      this.router.navigateByUrl('candidate/test/section'); // start //instructions //section
      return new QuizActions.GetQuestion();
    })
  );

  @Effect()
  getQuestion$ = this.actions$.pipe(
    ofType(QuizActions.GET_QUESTION),
    withLatestFrom(this.store),
    map(([action, store]) => {
      // check if quiz has ended

      // const questionQueue = store.quiz.quiz.questions;
      // Check if there is question in the queue
      // if (questionQueue.length > 0 && typeof questionQueue[0].id === 'number') {
      return new QuizActions.GetQuestionSuccess();
      // } else {
      // return new QuizActions.GetScore();
      // }
    })
  );

  @Effect()
  getQuestionNext$ = this.actions$.pipe(
    ofType(QuizActions.GET_QUESTION_NEXT),
    map((payload: boolean) => {
      return new QuizActions.GetQuestion();
    })
  );

  @Effect({ dispatch: false })
  getQuestionSuccess$ = this.actions$.pipe(
    ofType(QuizActions.GET_QUESTION_SUCCESS),
    map((question: Question) => {
      // this.router.navigateByUrl('quiz/' + question.id);
    })
  );

  @Effect({ dispatch: false })
  getQuestionFail$ = this.actions$.pipe(
    ofType(QuizActions.GET_QUESTION_FAIL),
    map((payload: boolean) => {
      // this.router.navigateByUrl(payload ? 'quiz/score' : 'quiz');
    })
  );

  // @Effect()
  // answer$ = this.actions$.pipe(
  //   ofType(QuizActions.ANSWER_QUESTION),
  //   debounceTime(this.debounce || 300, asyncScheduler),
  //   switchMap((payload: Answering) =>
  //     this.quizService.postAnswer(payload).pipe(
  //       map(() => new QuizActions.AnswerSuccess(payload)),
  //       catchError(() => of(new QuizActions.AnswerFail()))
  //     )
  //   )
  // );

  // @Effect()
  // answerSuccess$ = this.actions$.pipe(
  //   ofType(QuizActions.ANSWER_SUCCESS),
  //   withLatestFrom(this.store),
  //   map(([action, store]) => {
  //     // if all questions answered
  //     if (store.quiz.progress === store.quiz.quiz.questions.length) {
  //       // this.router.navigateByUrl('score');
  //       return new QuizActions.GetScore();
  //     } else {
  //       return new QuizActions.GetQuestion();
  //     }
  //   })
  // );

  // @Effect()
  // answerFailed$ = this.actions$.pipe(
  //   ofType(QuizActions.ANSWER_FAIL),
  //   map(() => new QuizActions.GetQuestion())
  // );
}
