import { Injectable } from '@angular/core';
import { Course } from 'src/app/@data/model/course.model';
import { HttpBaseService } from './http.base.service';

@Injectable()
export class CourseService extends HttpBaseService<Course> {
  getBaseUrl() {
    return 'assets/course.json';
  }
}
