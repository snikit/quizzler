import { Section } from './../../@data/model/quiz.model';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { Question, Quiz } from 'src/app/@data/model/quiz.model';
import { QuizStoreService } from 'src/app/@store/quiz/quiz.store.service';
import { QuizService } from 'src/app/@store/quiz/quiz.service';

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
  details: Section;
  canSkip = false;
  question: Question;
  destroy$: Subject<{}> = new Subject(); // Managing Unsubscription
  progress$: Observable<number>;

  constructor(
    private quizStore: QuizStoreService,
    private quizService: QuizService
  ) {
    this.quizStore.sectionDetails
      .pipe(first())
      .subscribe((details) => (this.details = details));
    this.progress$ = this.quizStore.activeSectionProgress.pipe(
      takeUntil(this.destroy$)
    );
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

    // this.quizService.syncSection(this.question.sectionIndex);
    // this.quizStore.makeQuizProgress();

    console.log('finish section');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
