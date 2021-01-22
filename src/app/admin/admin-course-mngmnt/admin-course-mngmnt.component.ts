import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/@data/model/course.model';
import { CourseService } from '../@data/service/course.service';

@Component({
  selector: 'app-admin-course-mngmnt',
  templateUrl: './admin-course-mngmnt.component.html',
  styleUrls: ['./admin-course-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCourseMngmntComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  courses: Observable<Course[]>;

  ngOnInit(): void {
    this.courses = this.courseService.getAll();
  }
}
