import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-instructions',
  templateUrl: './test-instructions.component.html',
  styleUrls: ['./test-instructions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInstructionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
