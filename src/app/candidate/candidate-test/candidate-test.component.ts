import {
  Component,
  OnDestroy,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Question, QuestionAnswer, Quiz } from 'src/app/data/model/quiz.model';
import { RootMsgService } from 'src/app/data/services/root.msg.service';
import { QuizStoreService } from 'src/app/store/quiz/quiz.store.service';
import { RootAnimateService } from 'src/app/data/services/root.animate.service';

@Component({
  templateUrl: './candidate-test.component.html',
  styleUrls: ['./candidate-test.component.css'],
})
export class CandidateTestComponent implements OnInit, OnDestroy {
  questionId: string;
  question: Question;
  // isAnswered: Subject<string> = new Subject<string>();
  destroy$: Subject<{}> = new Subject(); // Managing Unsubscription
  details: Quiz;
  storeState$: Observable<any>;
  canSkip = false;
  shakeQuestion = false;

  @ViewChild('theQuestion')
  questionDiv: ElementRef<HTMLDivElement>;

  constructor(
    private quizStore: QuizStoreService,
    private messageService: RootMsgService,
    private animateService: RootAnimateService
  ) {
    this.storeState$ = this.quizStore.getState();

    this.quizStore.quizDetails.subscribe((details) => (this.details = details));

    this.quizStore.currentQuestion
      .pipe(takeUntil(this.destroy$))
      .subscribe((q) => (this.question = q));
  }

  ngOnInit(): void {}

  visibleSidebar = false;

  onSubmit(): void {
    this.visibleSidebar = !this.visibleSidebar;
  }

  nextQuestion() {
    if (!this.canSkip && !this.question.isAnswered) {
      this.warnCannotSkip();
      return;
    } else {
      this.quizStore.nextQuestion();
      this.animateService.fadeInRight(this.questionDiv);
    }
  }

  previousQuestion() {
    this.quizStore.previousQuestion();
    this.animateService.fadeInLeft(this.questionDiv);
  }

  ngOnDestroy() {
    this.destroy$.next();
    // this.isAnswered.unsubscribe();
    this.destroy$.unsubscribe();
  }

  onAnswerSelect($event: QuestionAnswer) {
    this.quizStore.saveAnswer($event);
  }

  warnCannotSkip() {
    this.animateService.shakeX(this.questionDiv);
    this.messageService.showError('Cannot Skip', 'Please mark an answer !');
  }
}
