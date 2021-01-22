import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/@data/model/subject.model';
import { SubjectService } from './../@data/service/subject.service';

@Component({
  selector: 'app-admin-subject-mngmnt',
  templateUrl: './admin-subject-mngmnt.component.html',
  styleUrls: ['./admin-subject-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSubjectMngmntComponent implements OnInit {
  subjects: Observable<Subject[]>;

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjects = this.subjectService.getAll();
  }
}
