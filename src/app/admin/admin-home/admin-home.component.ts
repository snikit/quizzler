import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  @ViewChild('inContent')
  inContent: ElementRef<HTMLDivElement>;

  // crumbs = [];

  // private breadCrumbService: BreadCrumbService
  constructor() {}

  ngOnInit(): void {
    // this.crumbs = this.breadCrumbService.crumbs;
  }

  onTabSelect(event: any) {
    console.log(event);
    // this.breadCrumbService.addCrumb(event.key);
  }

  onTabToggle(visible: boolean) {
    this.inContent.nativeElement.style.paddingLeft = visible ? '100px' : '0px';
  }
}
