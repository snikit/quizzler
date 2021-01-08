import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCardComponent implements OnInit {
  @Input()
  testInfo = {
    title: 'AWS Programmming Programmming Programmming Level 1',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labor.',
    imgsrc: '/assets/imgs/avatar.svg',
    categories: ['sql', 'aws', 'java'],
  };

  constructor() {}

  ngOnInit(): void {}
}
