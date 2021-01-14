import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTestComponent implements OnInit {
  TABS = ['Info', 'Instructions', 'Sections', 'Brief'];
  activeTab: string = this.TABS[0];
  activeTabIndex = 0;
  instructions: string = ` <ul> <li> Before starting test close all chat windows, screen shot etc and make sure you have a stable internet connection </li> <li> Pressing F5 during the test will close your test and you will not be able to enter again </li> <li> If you computer shuts down you will able to continue again from the place you left</li><li>Your test will open in a new window</li><li>When resuming, please start your test as you did earlier</li></ul>`;
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
