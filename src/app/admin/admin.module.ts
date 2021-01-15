import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminQuestionBankFabComponent } from './admin-question-bank-fab/admin-question-bank-fab.component';
import { AdminQuestionBankComponent } from './admin-question-bank/admin-question-bank.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminTestmakerComponent } from './admin-testmaker/admin-testmaker.component';
import { AdminComponent } from './admin.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestInfoComponent } from './test-info/test-info.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestReportsComponent } from './test-reports/test-reports.component';
import { TestSettingsComponent } from './test-settings/test-settings.component';
import { TestViewComponent } from './test-view/test-view.component';
import { PanelModule } from 'primeng/panel';
import { BreadCrumbService } from './@data/service/bread-crumb-service.service';
import { InputTextModule } from 'primeng/inputtext';
import { AdminMngmntComponent } from './admin-mngmnt/admin-mngmnt.component';
import { CommonMngmntComponent } from './common-mngmnt/common-mngmnt.component';
import { AdminTopicMngmntComponent } from './admin-topic-mngmnt/admin-topic-mngmnt.component';
import { AdminCourseMngmntComponent } from './admin-course-mngmnt/admin-course-mngmnt.component';
import { AdminSubjectMngmntComponent } from './admin-subject-mngmnt/admin-subject-mngmnt.component';
@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminSideNavComponent,
    AdminDashboardComponent,
    AdminQuestionBankComponent,
    AdminQuestionBankFabComponent,
    AdminTestmakerComponent,
    CreateTestComponent,
    TestListComponent,
    TestViewComponent,
    TestInfoComponent,
    TestReportsComponent,
    TestSettingsComponent,
    AdminMngmntComponent,
    CommonMngmntComponent,
    AdminTopicMngmntComponent,
    AdminCourseMngmntComponent,
    AdminSubjectMngmntComponent,
  ],
  imports: [
    TableModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    DynamicDialogModule,
    TooltipModule,
    ButtonModule,
    AccordionModule,
    ScrollPanelModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    ChipModule,
    PaginatorModule,
    TabViewModule,
    PanelModule,
    InputTextModule,
  ],
  providers: [DialogService, ConfirmationService, BreadCrumbService],
})
export class AdminModule {}
