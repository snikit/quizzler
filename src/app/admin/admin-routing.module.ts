import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './../shared/user/user-home/user-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMngmntComponent } from './admin-mngmnt/admin-mngmnt.component';
import { AdminQuestionBankComponent } from './admin-question-bank/admin-question-bank.component';
import { AdminSessionMngmntComponent } from './admin-session-mngmnt/admin-session-mngmnt.component';
import { AdminTestmakerComponent } from './admin-testmaker/admin-testmaker.component';
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
      // { path: 'mngmnt/topic', component: AdminTopicMngmntComponent },
      // { path: 'mngmnt/subject', component: AdminSubjectMngmntComponent },
      // { path: 'mngmnt/course', component: AdminCourseMngmntComponent },
      { path: 'mngmnt/session', component: AdminSessionMngmntComponent },
      { path: 'mngmnt/user', component: UserHomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
