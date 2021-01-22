import { Injectable } from '@angular/core';
import { Topic } from 'src/app/@data/model/topic.model';
import { HttpBaseService } from './http.base.service';

@Injectable()
export class TopicService extends HttpBaseService<Topic> {
  getBaseUrl() {
    return 'assets/topic.json';
  }
}
