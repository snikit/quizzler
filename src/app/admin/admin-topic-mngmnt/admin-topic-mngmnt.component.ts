import { TopicVo } from './../@data/vo/mngmnt-vo';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-topic-mngmnt',
  templateUrl: './admin-topic-mngmnt.component.html',
  styleUrls: ['./admin-topic-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTopicMngmntComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items: TopicVo[] = [
    {
      id: '0',
      topic: 'General',
      subject: 'AWS',
      course: 'fresher',
    },
    {
      id: '1',
      topic: 'EC2',
      subject: 'AWS',
      course: 'fresher',
    },
    {
      id: '2',
      topic: 'Functions',
      subject: 'Python',
      course: 'fresher',
    },
    {
      id: '3',
      topic: 'Arrays',
      subject: 'Java',
      course: 'fresher',
    },
    {
      id: '4',
      topic: 'Constructor',
      subject: 'OOPS',
      course: 'fresher',
    },
    {
      id: '5',
      topic: 'Arrays',
      subject: 'OOPS',
      course: 'fresher',
    },
  ];
}
