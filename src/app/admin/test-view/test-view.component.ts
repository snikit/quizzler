import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestViewComponent implements OnInit {
  testInfo = {
    title: 'Senior Java Engineer Part 1Engineer Part 1Engineer Part 1',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut labor.',
    imgsrc: '/assets/imgs/avatar (8).svg',
    categories: ['algorithm', 'program', 'fraction', 'dynamic'],
  };

  constructor() {}

  ngOnInit(): void {}
}
