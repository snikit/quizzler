import { Injectable } from '@angular/core';
import { Subject } from 'src/app/@data/model/subject.model';
import { HttpBaseService } from './http.base.service';

@Injectable()
export class SubjectService extends HttpBaseService<Subject> {
  getBaseUrl() {
    return 'assets/subject.json';
  }
}
