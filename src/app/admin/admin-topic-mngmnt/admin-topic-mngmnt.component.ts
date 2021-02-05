import { TopicCreateOrEditComponent } from './../shared/topic-create-or-edit/topic-create-or-edit.component';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
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

  constructor(
    private topicService: TopicService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.topics = this.topicService.getAll();
  }
  editTopic(subject: Topic) {
    this.showModal(subject, true);
  }

  showModal(topic: Topic = null, editMode = false) {
    const ref = this.dialogService.open(TopicCreateOrEditComponent, {
      data: {
        editMode: editMode,
        topic: topic,
      },
      width: '600px',
      dismissableMask: true,
      header: editMode ? 'EDIT TOPIC' : 'ADD TOPIC',
    });

    ref.onClose.subscribe((topicdata) => {
      console.log(topicdata);
      console.log(editMode);
    });
  }

  addTopic() {
    this.showModal();
  }

  deleteConfirm(topic: Topic) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete <b class="bold-text-font">${topic.label}</b> ?`,
      accept: (topicData: Topic) => {
        console.log(`delete ${JSON.stringify(topicData)}`);
      },
      header: 'DELETE TOPIC',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'black-btn',
      rejectButtonStyleClass: 'black-btn',
      acceptLabel: 'YES',
      rejectLabel: 'NO',
    });
  }
}
