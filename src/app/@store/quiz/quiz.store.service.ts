import { Section } from './../../@data/model/quiz.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Instruction } from 'src/app/@data/model/question.model';
import {
  Details,
  Question,
  QuestionAnswer,
  Quiz,
} from 'src/app/@data/model/quiz.model';
import * as QuizActions from './quiz.actions';
import * as reducer from './quiz.reducer';

@Injectable()
export class QuizStoreService {
  question;

  constructor(private store: Store<reducer.Store>) {}

  getQuiz() {
    this.store.dispatch(new QuizActions.GetQuiz());
  }

  getQuizState() {
    return this.store.select(reducer.selectQuizState);
  }

  getQuestionsState() {
    return this.store.select(reducer.selectQuestionsState);
  }

  // postAnswer(answer: Answering) {
  //   this.store.dispatch(new QuizActions.AnswerQuestion(answer));
  // }

  nextQuestion() {
    this.store.dispatch(new QuizActions.GetQuestionNext(true));
  }

  previousQuestion() {
    this.store.dispatch(new QuizActions.GetQuestionPrevious(true));
  }

  getQuestion() {
    this.store.dispatch(new QuizActions.GetQuestion());
  }

  saveAnswer(answer: QuestionAnswer) {
    this.store.dispatch(new QuizActions.AnswerQuestion(answer));
  }

  postAnswer(questionIndex: number, sectionIndex: number) {
    this.store.dispatch(
      new QuizActions.PostAnswer(questionIndex, sectionIndex)
    );
  }

  bookmarkToggleQuestion() {
    this.store.dispatch(new QuizActions.BookmarkToggleQuestion());
  }

  setCurrentQuestionIndex(index: number) {
    this.store.dispatch(new QuizActions.SetQuestionIndex(index));
  }
  setCurrentSectionIndex(index: number) {
    this.store.dispatch(new QuizActions.SetSectionIndex(index));
  }

  get isLastQuestion(): Observable<boolean> {
    return this.store.select(reducer.selectIsLastQuestion);
  }

  get selectIsLastQuestionAnswered(): Observable<boolean> {
    return this.store.select(reducer.selectIsLastQuestionAnswered);
  }

  get isQuizLoaded(): Observable<boolean> {
    return this.store.select(reducer.selectIsQuizLoaded);
  }

  get quizInstructions(): Observable<Instruction> {
    return this.store.select(reducer.selectQuizInstructions);
  }

  get activeSectionProgress(): Observable<number> {
    return this.store.select(reducer.selectSectionProgress);
  }

  get currentQuestion(): Observable<Question> {
    return this.store.select(reducer.selectCurrentQuestion);
  }

  // get quizStatus(): Observable<boolean> {
  //   return this.store.select(reducer.selectQuizStatus);
  // }

  // get quizScoreDetails(): Observable<Answering[]> {
  //   return this.store.select(reducer.selectScoreDetails);
  // }

  get quizDetails(): Observable<Quiz> {
    return this.store.select(reducer.selectQuizDetails).pipe(take(1));
  }

  // get quizScore(): Observable<number> {
  //   return this.store.select(reducer.selectScore);
  // }

  get canSkipQuestionsAbiity(): Observable<boolean> {
    return this.store
      .select(reducer.selectCanSkipQuestionsAbiity)
      .pipe(take(1));
  }

  get sectionDetails(): Observable<Section> {
    return this.store.select(reducer.selectSectionDetails).pipe(take(1));
  }

  makeQuizProgress() {
    this.store.dispatch(new QuizActions.MakeQuizProgress());
  }
}
