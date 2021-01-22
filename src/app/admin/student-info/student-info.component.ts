import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
