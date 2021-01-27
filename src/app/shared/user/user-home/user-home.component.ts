import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  TABS = [
    {
      key: 'info',
      label: 'info',
    },
    {
      key: 'tests',
      label: 'Test',
      count: 325,
    },

    {
      key: 'reports',
      label: 'reports',
    },

    {
      key: 'settings',
      label: 'settings',
    },
  ];

  ACTIVE_TAB = this.TABS[0].key;

  activateTab(tabKey: string) {
    this.ACTIVE_TAB = tabKey;
  }
}
