import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  testInfo = {
    title: 'Senior Java Engineer Part 1Engineer Part 1Engineer Part 1',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut labor.',
    imgsrc: '/assets/imgs/avatar (5).svg',
    categories: ['algorithm', 'program', 'fraction', 'dynamic'],
  };

  sections = [
    {
      subject: 'QWS',
      topic: 'functional programming',
      level: '5',
      count: 30,
    },
    {
      subject: 'JAVA PROGRAMMING',
      topic: 'oops',
      level: '1',
      count: 300,
    },
    {
      subject: 'DATABASE',
      topic: 'SQL',
      level: '5',
      count: 30,
    },
  ];
}
