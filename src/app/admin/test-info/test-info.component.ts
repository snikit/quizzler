import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
