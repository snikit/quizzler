import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-reports',
  templateUrl: './test-reports.component.html',
  styleUrls: ['./test-reports.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
