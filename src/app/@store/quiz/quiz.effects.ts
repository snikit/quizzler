import { Section, Quiz } from './../../@data/model/quiz.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  take,
  withLatestFrom,
} from 'rxjs/operators';
import { Question } from 'src/app/@data/model/quiz.model';
import * as QuizActions from './quiz.actions';
import * as reducer from './quiz.reducer';
import { QuizService } from './quiz.service';
import { flatMap } from 'lodash';

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
      this.router.navigateByUrl('candidate/test/instructions'); // start //instructions //section
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

  @Effect()
  postAnswer$ = this.actions$.pipe(
    ofType(QuizActions.POST_ANSWER),
    switchMap((action: { questionIndex: number; sectionIndex: number }) => {
      return this.store.pipe(
        select(reducer.selectQuestion, {
          questionIndex: action.questionIndex,
          sectionIndex: action.sectionIndex,
        }),
        take(1)
      );
    }),

    switchMap((question) => {
      return this.quizService.postAnswer(question as any).pipe(
        map(
          () =>
            new QuizActions.PostAnswerResult(
              question.index,
              question.sectionIndex,
              true
            )
        ),
        catchError(() =>
          of(
            new QuizActions.PostAnswerResult(
              question.index,
              question.sectionIndex,
              false
            )
          )
        )
      );
    })

    // map(([action, question]) => {
    //   console.log(question);
  );

  @Effect()
  postAnswerResult$ = this.actions$.pipe(
    ofType(QuizActions.POST_ANSWER_RESULT),
    withLatestFrom(this.store),
    map(([action, store]) => {
      let actionPayload = action as {
        sectionIndex: number;
        questionIndex: number;
      };

      const questions =
        store.quiz.quiz.sections[actionPayload.sectionIndex].questions;
      return {
        isLastQuestion: questions.length == actionPayload.questionIndex + 1,
        sectionIndex: actionPayload.sectionIndex,
      };
    }),
    switchMap(({ isLastQuestion, sectionIndex }) => {
      if (isLastQuestion) {
        return [
          new QuizActions.SectionComplete(sectionIndex),
          new QuizActions.MakeQuizProgress(),
        ];
      } else {
        return [new QuizActions.GetQuestionNext(true)];
      }
    })
  );

  // @Effect({dispatch : false})
  // quizProgressSectionalSync$ = this.actions$.pipe(
  //   ofType(QuizActions.MAKE_QUIZ_PROGRESS),
  //   withLatestFrom(this.store),
  //   map(([action, store]) => {
  //     const sections = store.quiz.quiz.sections.length;

  //   })
  // );

  // @Effect({ dispatch: false })
  // postAnswer$ = this.actions$.pipe(
  //   ofType(QuizActions.POST_ANSWER),
  //   withLatestFrom(this.store),
  //   map(([action, store]) => {
  //     const state = store.quiz;
  //     const section = state.quiz.sections[state.currentSectionIndex];
  //     const currentQuestion = section.questions[state.currentQuestionIndex];

  //     console.log(currentQuestion);

  //     this.quizService.postAnswer(currentQuestion as any);
  //   })
  // );

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

  @Effect()
  quizProgress$ = this.actions$.pipe(
    ofType(QuizActions.MAKE_QUIZ_PROGRESS),
    withLatestFrom(this.store),
    map(([action, store]) => {
      const sections = store.quiz.quiz.sections.length;

      if (store.quiz.currentSectionIndex + 1 < sections) {
        this.router.navigateByUrl('candidate/test/section');
        return new QuizActions.MakeQuizProgress_OnSection();
      } else {
        this.router.navigateByUrl('candidate/test/done');
        return new QuizActions.QuizComplete();
      }
    })
  );

  @Effect({ dispatch: false })
  quizComplete$ = this.actions$.pipe(
    ofType(QuizActions.QUIZ_COMPLETE),
    withLatestFrom(this.store),
    switchMap(([action, store]) => {
      return this.quizService.syncQuiz(store.quiz.quiz);
    })
  );

  @Effect({ dispatch: false })
  sectionComplete$ = this.actions$.pipe(
    ofType(QuizActions.SECTION_COMPLETE),
    switchMap((sectionIndex: number) => {
      return this.store.pipe(
        select(reducer.selectSectionByIndex, {
          sectionIndex: sectionIndex,
        }),
        take(1)
      );
    }),

    switchMap((section) => {
      return this.quizService.syncSection(section as Section);
      // .pipe(
      //   map(() => new QuizActions.MakeQuizProgress_OnSection()),
      //   catchError(() => of(new QuizActions.MakeQuizProgress_OnSection()))
      // );
    })

    // map(([action, question]) => {
    //   console.log(question);
  );
}
