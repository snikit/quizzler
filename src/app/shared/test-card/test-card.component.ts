import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

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

  @Input()
  small = false;

  constructor(
    private router: Router // private breadCrumbService: BreadCrumbService
  ) {}

  ngOnInit(): void {}

  route() {
    // this.breadCrumbService.addCrumb('testview');
    this.router.navigateByUrl('/admin/testview');
  }
}
