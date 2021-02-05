import { CourseCreateOrEditComponent } from './../shared/course-create-or-edit/course-create-or-edit.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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
  constructor(
    private courseService: CourseService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService
  ) {}

  courses: Observable<Course[]>;

  ngOnInit(): void {
    this.courses = this.courseService.getAll();
  }

  editCourse(course: Course) {
    this.showModal(course, true);
  }

  showModal(course: Course = null, editMode = false) {
    const ref = this.dialogService.open(CourseCreateOrEditComponent, {
      data: {
        editMode: editMode,
        course: course,
      },
      width: '600px',
      dismissableMask: true,
      header: editMode ? 'EDIT COURSE' : 'ADD COURSE',
    });

    ref.onClose.subscribe((course) => {
      console.log(course);
      console.log(editMode);
    });
  }

  addCourse() {
    this.showModal();
  }

  deleteConfirm(course) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b class="bold-text-font">${course.label}</b> ?`,
      accept: (course) => {
        console.log(`delete ${JSON.stringify(course)}`);
      },
      header: 'DELETE COURSE',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'black-btn',
      rejectButtonStyleClass: 'black-btn',
      acceptLabel: 'YES',
      rejectLabel: 'NO',
    });
  }
}
