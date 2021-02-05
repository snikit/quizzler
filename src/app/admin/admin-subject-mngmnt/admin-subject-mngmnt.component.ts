import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/@data/model/subject.model';
import { SubjectService } from './../@data/service/subject.service';
import { SubjectCreateOrEditComponent } from '../shared/subject-create-or-edit/subject-create-or-edit.component';

@Component({
  selector: 'app-admin-subject-mngmnt',
  templateUrl: './admin-subject-mngmnt.component.html',
  styleUrls: ['./admin-subject-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSubjectMngmntComponent implements OnInit {
  subjects: Observable<Subject[]>;

  constructor(
    private subjectService: SubjectService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.subjects = this.subjectService.getAll();
  }

  editSubject(subject: Subject) {
    this.showModal(subject, true);
  }

  showModal(subject: Subject = null, editMode = false) {
    const ref = this.dialogService.open(SubjectCreateOrEditComponent, {
      data: {
        editMode: editMode,
        subject: subject,
      },
      width: '600px',
      dismissableMask: true,
      header: editMode ? 'EDIT SUBJECT' : 'ADD SUBJECT',
    });

    ref.onClose.subscribe((subject) => {
      console.log(subject);
      console.log(editMode);
    });
  }

  addSubject() {
    this.showModal();
  }

  deleteConfirm(subject: Subject) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b class="bold-text-font">${subject.label}</b> ?`,
      accept: (subjectData: Subject) => {
        console.log(`delete ${JSON.stringify(subjectData)}`);
      },
      header: 'DELETE SUBJECT',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'black-btn',
      rejectButtonStyleClass: 'black-btn',
      acceptLabel: 'YES',
      rejectLabel: 'NO',
    });
  }
}
