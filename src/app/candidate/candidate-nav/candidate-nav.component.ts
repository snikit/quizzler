import { first, takeUntil } from 'rxjs/operators';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Question, Quiz } from 'src/app/@data/model/quiz.model';
import { QuizStoreService } from 'src/app/@store/quiz/quiz.store.service';

export enum CANDIDATE_NAV_MODES {
  QUIZ_ACTIVE = 'QUIZ_ACTIVE',
}
@Component({
  selector: 'app-candidate-nav',
  templateUrl: './candidate-nav.component.html',
  styleUrls: ['./candidate-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateNavComponent implements OnInit, OnDestroy {
  details: Quiz;
  canSkip = false;
  question: Question;
  destroy$: Subject<{}> = new Subject(); // Managing Unsubscription
  progress$: Observable<number>;

  constructor(private quizStore: QuizStoreService) {
    this.quizStore.quizDetails
      .pipe(first())
      .subscribe((details) => (this.details = details));
    this.progress$ = this.quizStore.activeSectionProgress;
    // this.quizStore.canSkipQuestionsAbiity.subscribe(
    //   (canSkip) => (this.canSkip = canSkip)
    // );

    // this.isLastQuestion$ = this.quizStore.selectIsLastQuestionAnswered;

    this.quizStore.currentQuestion
      .pipe(takeUntil(this.destroy$))
      .subscribe((q) => (this.question = q));
  }

  ngOnInit(): void {}

  get isQuizMode() {
    return true;
  }

  finishSection() {
    this.quizStore.postAnswer(this.question.index, this.question.sectionIndex);
    // this.quizStore.
    console.log('finish section');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
