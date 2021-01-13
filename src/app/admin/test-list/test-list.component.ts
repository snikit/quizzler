import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreadCrumbService } from '../@data/service/bread-crumb-service.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // animations: [
  //   trigger('inOutAnimation', [
  //     transition(':enter', [
  //       style({ height: 0, opacity: 0 }),
  //       animate('0.2s ease-out'),
  //     ]),
  //     transition(':leave', [
  //       style({ height: 'auto', opacity: 1 }),
  //       animate('0.2s ease-in'),
  //     ]),
  //   ]),
  // ],
})
export class TestListComponent implements OnInit {
  filtersShown = false;
  searchExpanded = false;

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

  constructor(private breadCrumbService: BreadCrumbService) {
    this.testInfos = [...this.testInfos, ...this.testInfos.reverse()];
  }

  ngOnInit(): void {}
}
