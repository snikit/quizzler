import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestViewComponent implements OnInit {
  testInfo = {
    title: 'Senior Java Engineer Part 1Engineer Part 1Engineer Part 1',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut labor.',
    imgsrc: '/assets/imgs/avatar (5).svg',
    categories: ['algorithm', 'program', 'fraction', 'dynamic'],
  };

  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigateByUrl('/admin/testmaker');
  }

  TABS = [
    {
      key: 'info',
      label: 'info',
    },

    {
      key: 'edit',
      label: 'edit',
    },

    // {
    //   key: 'settings',
    //   label: 'settings',
    // },
  ];

  ACTIVE_TAB = this.TABS[0].key;

  activateTab(tabKey: string) {
    this.ACTIVE_TAB = tabKey;
  }
}
