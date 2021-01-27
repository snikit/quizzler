import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdminMngmntService } from './admin-mngmnt.service';

@Component({
  selector: 'app-admin-mngmnt',
  templateUrl: './admin-mngmnt.component.html',
  styleUrls: ['./admin-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMngmntComponent implements OnInit {
  constructor(private adminMngmntService: AdminMngmntService) {}

  ACTIVE_TAB: string;

  ngOnInit(): void {
    this.ACTIVE_TAB = this.adminMngmntService.getLastActiveTab();
    this.ACTIVE_TAB = this.ACTIVE_TAB ? this.ACTIVE_TAB : this.TABS[0].key;
  }

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
      key: 'TESTS',
      label: 'TESTS',
      count: 2193,
    },
    {
      key: 'STUDENTS',
      label: 'STUDENTS',
      routerLink: '#',
      count: 200,
    },
  ];

  activateTab(tabKey: string) {
    this.ACTIVE_TAB = tabKey;
    this.adminMngmntService.setLastActiveTab(this.ACTIVE_TAB);
  }
}
