import { Router } from '@angular/router';
export const ADMIN_TABS = {
  HOME: 'HOME',
  USERS: 'USERS',
  FOLDER: 'FOLDER',
  CHAT: 'CHAT',
  SETTINGS: 'SETTINGS',
  QUESTION_BANK: 'QUESTION_BANK',
  TEST_MAKER: 'TEST_MAKER',
  TEST_VIEW: 'TEST_VIEW',
};

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('changeTabSize', [
      state(
        'open',
        style({
          width: '100px',
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
        })
      ),
      transition('open=>closed', animate('200ms')),
      transition('closed=>open', animate('200ms')),
    ]),
  ],
})
export class AdminSideNavComponent implements OnInit {
  navState = 'open';

  @Output()
  indexChange = new EventEmitter<any>();

  @ViewChild('sidenav')
  sidenav: ElementRef<HTMLDivElement>;

  sidenavClosed = false;

  tabs = [
    { iconClass: 'pi-home', tabKey: ADMIN_TABS.HOME, url: '/' },
    { iconClass: 'pi-users', tabKey: ADMIN_TABS.USERS },
    { iconClass: 'pi-book', tabKey: ADMIN_TABS.TEST_MAKER, url: 'testmaker' },
    {
      iconClass: 'pi-question-circle',
      tabKey: ADMIN_TABS.QUESTION_BANK,
      url: 'questionbank',
    },
    { iconClass: 'pi-cog', tabKey: ADMIN_TABS.SETTINGS },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleNav() {
    this.sidenavClosed = !this.sidenavClosed;
    this.navState = this.sidenavClosed ? 'closed' : 'open';
  }

  activeIndex = 0;

  activate(index: number, tabValue: any) {
    this.activeIndex = index;
    this.indexChange.emit({ index: this.activeIndex, key: tabValue.tabKey });

    if (tabValue.url) this.router.navigateByUrl('/admin/' + tabValue.url);
  }
}
