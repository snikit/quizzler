import { AdminQuestionBankComponent } from './admin-question-bank/admin-question-bank.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
