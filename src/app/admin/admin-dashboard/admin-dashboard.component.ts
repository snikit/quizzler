import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  testInfos = [
    {
      title: 'AWS Programmming Programmming Programmming Level 1',
      info:
        'Lorem ipsum dolor sit ameut labor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labor',
      imgsrc: '/assets/imgs/avatar.svg',
      categories: ['sql', 'aws', 'java'],
    },
    {
      title: 'SQL Programmming Level 2',
      info:
        'Lorem ipsum dolor sit amet, coned do eiusmodtempor incididunt ut labor.',
      imgsrc: '/assets/imgs/avatar (2).svg',
      categories: ['python', 'java'],
    },
    {
      title: 'Dynamic programming',
      info:
        'Consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labor.',
      imgsrc: '/assets/imgs/avatar (3).svg',
      categories: ['c', 'cpp'],
    },
    {
      title: 'Mega level Program',
      info: 'Aipiscing elit, sed do eiusmodtempor incididunt ut labor.',
      imgsrc: '/assets/imgs/avatar (5).svg',
      categories: ['plsql', 'mysql', 'oracle'],
    },
    {
      title: 'Hiring for Interns',
      info:
        'Lorem ipsum dolor sit amet, sed do eiusmodtempor incididunt ut labor.',
      imgsrc: '/assets/imgs/avatar (6).svg',
      categories: ['managa'],
    },
  ];

  TABS = {
    IN_PROGRESS: 'IN_PROGRESS',
    TO_BE_REVIEWD: 'TO_BE_REVIEWD',
    UPCOMING: 'UPCOMING',
    TOTAL: 'TOTAL',
  };

  ACTIVE_TAB: string = this.TABS.IN_PROGRESS;

  activateTab(tabKey: string) {
    this.ACTIVE_TAB = tabKey;
  }
}
