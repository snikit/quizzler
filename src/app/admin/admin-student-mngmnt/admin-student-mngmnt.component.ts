import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-student-mngmnt',
  templateUrl: './admin-student-mngmnt.component.html',
  styleUrls: ['./admin-student-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminStudentMngmntComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  infos = [
    {
      title: 'Rohit SharmaRohit SharmaRohit SharmaRohit Sharma',
      info:
        'Lorem ipsum dolor sit ameut labor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labor',
      imgsrc: '/assets/imgs/avatar.svg',
      categories: ['sql', 'aws', 'java'],
    },
    {
      title: 'Abhishek Thakur',
      info:
        'Lorem ipsum dolor sit amet, coned do eiusmodtempor incididunt ut labor.',
      imgsrc: '/assets/imgs/avatar (2).svg',
      categories: ['python', 'java'],
    },
    {
      title: 'Saini Roit Singh',
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
      title: 'Abhishek Thakur',
      info:
        'Lorem ipsum dolor sit amet, coned do eiusmodtempor incididunt ut labor.',
      imgsrc: '/assets/imgs/avatar (2).svg',
      categories: ['python', 'java'],
    },
    {
      title: 'Saini Roit Singh',
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
    {
      title: 'Rohit Sharma',
      info:
        'Lorem ipsum dolor sit ameut labor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labor',
      imgsrc: '/assets/imgs/avatar.svg',
      categories: ['sql', 'aws', 'java'],
    },
    {
      title: 'Abhishek Thakur',
      info:
        'Lorem ipsum dolor sit amet, coned do eiusmodtempor incididunt ut labor.',
      imgsrc: '/assets/imgs/avatar (2).svg',
      categories: ['python', 'java'],
    },
    {
      title: 'Saini Roit Singh',
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
}
