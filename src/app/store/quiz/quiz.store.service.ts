import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Instruction } from 'src/app/data/model/question.model';
import { Question, QuestionAnswer, Quiz } from 'src/app/data/model/quiz.model';
import * as QuizActions from './quiz.actions';
import * as reducer from './quiz.reducer';

@Injectable()
export class QuizStoreService {
  question;

  constructor(private store: Store<reducer.QuizStore>) {}

  getQuiz() {
    this.store.dispatch(new QuizActions.GetQuiz());
  }

  getState() {
    return this.store.select(reducer.selectQuizState);
  }

  // postAnswer(answer: Answering) {
  //   this.store.dispatch(new QuizActions.AnswerQuestion(answer));
  // }

  nextQuestion() {
    this.store.dispatch(new QuizActions.GetQuestionNext(true));
  }

  getQuestion() {
    this.store.dispatch(new QuizActions.GetQuestion());
  }

  saveAnswer(answer: QuestionAnswer) {
    this.store.dispatch(new QuizActions.AnswerQuestion(answer));
  }

  get isQuizLoaded(): Observable<boolean> {
    return this.store.select(reducer.selectIsQuizLoaded);
  }

  get quizInstructions(): Observable<Instruction> {
    return this.store.select(reducer.selectQuizInstructions);
  }

  get quizProgress(): Observable<any> {
    return this.store.select(reducer.selectQuizProgress);
  }

  get currentQuestion(): Observable<Question> {
    return this.store.select(reducer.selectQuestion);
  }

  get quizStatus(): Observable<boolean> {
    return this.store.select(reducer.selectQuizStatus);
  }

  // get quizScoreDetails(): Observable<Answering[]> {
  //   return this.store.select(reducer.selectScoreDetails);
  // }

  get quizDetails(): Observable<Quiz> {
    return this.store.select(reducer.selectQuizDetails).pipe(take(1));
  }

  // get quizScore(): Observable<number> {
  //   return this.store.select(reducer.selectScore);
  // }
}
