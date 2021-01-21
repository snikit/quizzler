import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-mngmnt',
  templateUrl: './admin-mngmnt.component.html',
  styleUrls: ['./admin-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMngmntComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  TABS = [
    {
      key: 'COURSES',
      label: 'COURSES',
      count: 15,
    },
    {
      key: 'SUBJECTS',
      label: 'SUBJECTS',
      count: 50,
    },
    {
      key: 'TOPICS',
      label: 'TOPICS',
      count: 100,
    },
    {
      key: 'QUESTIONS',
      label: 'QUESTIONS',
      count: 2193,
    },
    {
      key: 'STUDENTS',
      label: 'STUDENTS',
      routerLink: '#',
      count: 200,
    },
  ];

  ACTIVE_TAB = this.TABS[0].key;

  activateTab(tabKey: string) {
    this.ACTIVE_TAB = tabKey;
  }
}
