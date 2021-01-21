import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-test-skeleton-card-list',
  templateUrl: './admin-test-skeleton-card-list.component.html',
  styleUrls: ['./admin-test-skeleton-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTestSkeletonCardListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
