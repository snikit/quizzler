import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SubjectVO } from '../@data/vo/mngmnt-vo';

@Component({
  selector: 'app-admin-subject-mngmnt',
  templateUrl: './admin-subject-mngmnt.component.html',
  styleUrls: ['./admin-subject-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSubjectMngmntComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items: SubjectVO[] = [
    {
      id: '0',
      subject: 'AWS',
      course: 'fresher',
    },
    {
      id: '1',
      subject: 'AWS',
      course: 'fresher',
    },
    {
      id: '2',
      subject: 'Python',
      course: 'fresher',
    },
    {
      id: '3',
      subject: 'Java',
      course: 'fresher',
    },
    {
      id: '4',
      subject: 'OOPS',
      course: 'fresher',
    },
    {
      id: '5',
      subject: 'OOPS',
      course: 'fresher',
    },
  ];
}
