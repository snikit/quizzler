import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTestComponent implements OnInit {
  TABS = ['Info', 'Instructions', 'Sections', 'Brief'];
  activeTab: string = this.TABS[0];
  activeTabIndex = 0;

  // constructor(public ref: DynamicDialogRef) {}

  ngOnInit(): void {}

  close() {
    // this.ref.close('loller');
  }

  next() {
    this.activeTab = this.TABS[++this.activeTabIndex % this.TABS.length];
  }

  previous() {
    this.activeTab = this.TABS[--this.activeTabIndex % this.TABS.length];
  }

  createTest() {
    console.log('createTest');
  }
}
