import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-submission-review',
  templateUrl: './submission-review.component.html',
  styleUrls: ['./submission-review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmissionReviewComponent implements OnInit {
  rows = new Array(50);

  constructor() {}

  ngOnInit(): void {}

  getIcon(index: number): string {
    if (index % 3 === 0) {
      return 'pi pi-check';
    } else if (index % 5 === 0) {
      return 'pi pi-bookmark';
    } else {
      return 'pi pi-exclamation-circle';
    }
  }

  getColorClass(index: number): string {
    if (index % 3 === 0) {
      return 'p-button-success';
    } else if (index % 5 === 0) {
      return 'p-button-warning';
    } else {
      return 'p-button-danger';
    }
  }
}
