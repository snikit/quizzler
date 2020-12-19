import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-candidate-test-done',
  templateUrl: './candidate-test-done.component.html',
  styleUrls: ['./candidate-test-done.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateTestDoneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onNext() {
    console.log('on next done');
  }
}
