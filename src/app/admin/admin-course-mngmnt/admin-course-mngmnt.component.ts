import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseVO } from '../@data/vo/mngmnt-vo';

@Component({
  selector: 'app-admin-course-mngmnt',
  templateUrl: './admin-course-mngmnt.component.html',
  styleUrls: ['./admin-course-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCourseMngmntComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items: CourseVO[] = [
    {
      id: '0',
      course: 'fresher',
    },
    {
      id: '1',
      course: 'fresher',
    },
    {
      id: '2',
      course: 'fresher',
    },
    {
      id: '3',
      course: 'fresher',
    },
    {
      id: '4',
      course: 'fresher',
    },
    {
      id: '5',
      course: 'fresher',
    },
  ];
}
