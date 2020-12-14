import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/data/model/quiz.model';
import { QuizStoreService } from 'src/app/store/quiz/quiz.store.service';

export enum CANDIDATE_NAV_MODES {
  QUIZ_ACTIVE = 'QUIZ_ACTIVE',
}
@Component({
  selector: 'app-candidate-nav',
  templateUrl: './candidate-nav.component.html',
  styleUrls: ['./candidate-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateNavComponent implements OnInit {
  details: Quiz;

  @Output()
  navReviewButtonClick = new EventEmitter();

  progress$: Observable<number>;

  constructor(private quizStore: QuizStoreService) {
    this.quizStore.quizDetails.subscribe((details) => (this.details = details));
    this.progress$ = this.quizStore.quizProgress;
  }

  ngOnInit(): void {}

  onNavReviewButtonClick() {
    this.navReviewButtonClick.emit();
  }

  get isQuizMode() {
    return true;
  }
}
