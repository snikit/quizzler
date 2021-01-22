import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCourseMngmntComponent } from './admin-course-mngmnt/admin-course-mngmnt.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMngmntComponent } from './admin-mngmnt/admin-mngmnt.component';
import { AdminQuestionBankComponent } from './admin-question-bank/admin-question-bank.component';
import { AdminSubjectMngmntComponent } from './admin-subject-mngmnt/admin-subject-mngmnt.component';
import { AdminTestMngmntComponent } from './admin-test-mngmnt/admin-test-mngmnt.component';
import { AdminTestmakerComponent } from './admin-testmaker/admin-testmaker.component';
import { AdminTopicMngmntComponent } from './admin-topic-mngmnt/admin-topic-mngmnt.component';
import { TestViewComponent } from './test-view/test-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'questionbank', component: AdminQuestionBankComponent },
      { path: 'testmaker', component: AdminTestmakerComponent },
      { path: 'testview', component: TestViewComponent },
      { path: 'mngmnt', component: AdminMngmntComponent },
      { path: 'mngmnt/topic', component: AdminTopicMngmntComponent },
      { path: 'mngmnt/subject', component: AdminSubjectMngmntComponent },
      { path: 'mngmnt/course', component: AdminCourseMngmntComponent },
      { path: 'mngmnt/test', component: AdminTestMngmntComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
