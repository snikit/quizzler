import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-settings',
  templateUrl: './test-settings.component.html',
  styleUrls: ['./test-settings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
