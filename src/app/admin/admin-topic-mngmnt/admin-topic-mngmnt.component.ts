import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/@data/model/topic.model';
import { TopicService } from './../@data/service/topic.service';

@Component({
  selector: 'app-admin-topic-mngmnt',
  templateUrl: './admin-topic-mngmnt.component.html',
  styleUrls: ['./admin-topic-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTopicMngmntComponent implements OnInit {
  topics: Observable<Topic[]>;

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topics = this.topicService.getAll();
  }
}
