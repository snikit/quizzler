import { Question } from 'src/app/@data/model/quiz.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';
import { QuizStoreService } from 'src/app/@store/quiz/quiz.store.service';

@Component({
  selector: 'app-submission-review',
  templateUrl: './submission-review.component.html',
  styleUrls: ['./submission-review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmissionReviewComponent implements OnInit {
  rows = new Array(50);
  qstnState$: Observable<any>;

  @Output()
  cancelClick = new EventEmitter();

  @Output()
  submitClick = new EventEmitter();

  constructor(private quizStore: QuizStoreService) {
    this.qstnState$ = this.quizStore.getQuestionsState();
  }

  ngOnInit(): void {}

  getIcon(qstn: Question): string {
    if (qstn.isBookmarked) {
      return 'pi pi-bookmark';
    } else if (qstn.isAnswered) {
      return 'pi pi-check';
    } else {
      return 'pi pi-exclamation-circle';
    }
  }

  getColorClass(qstn: Question): string {
    if (qstn.isBookmarked) {
      return 'p-button-warning';
    } else if (qstn.isAnswered) {
      return 'p-button-success';
    } else {
      return 'p-button-danger';
    }
  }

  loadQuestionIndex(index: number) {
    this.quizStore.setCurrentQuestionIndex(index);
    this.onCancelClick();
  }

  onCancelClick() {
    this.cancelClick.emit();
  }

  onSubmitClick() {
    this.submitClick.emit();
  }
}
