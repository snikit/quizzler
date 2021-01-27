import { HttpClientModule } from '@angular/common/http';
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
import { ChartModule } from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ProductService } from '../@data/services/productservice';
import { AdminSessionCardListComponent } from './shared/admin-session-card-list/admin-session-card-list.component';
import { AdminTestSkeletonCardListComponent } from './shared/admin-test-skeleton-card-list/admin-test-skeleton-card-list.component';
import { MenuModule } from 'primeng/menu';
import { AdminStudentMngmntComponent } from './admin-student-mngmnt/admin-student-mngmnt.component';
import { AdminSessionMngmntComponent } from './admin-session-mngmnt/admin-session-mngmnt.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { DialogModule } from 'primeng/dialog';
import { CourseService } from './@data/service/course.service';
import { SubjectService } from './@data/service/subject.service';
import { TopicService } from './@data/service/topic.service';
import { CourseCreateOrEditComponent } from './shared/course-create-or-edit/course-create-or-edit.component';
import { SubjectCreateOrEditComponent } from './shared/subject-create-or-edit/subject-create-or-edit.component';
import { TopicCreateOrEditComponent } from './shared/topic-create-or-edit/topic-create-or-edit.component';
import { AdminMngmntService } from './admin-mngmnt/admin-mngmnt.service';
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
    AdminSessionCardListComponent,
    AdminTestSkeletonCardListComponent,
    AdminStudentMngmntComponent,
    AdminSessionMngmntComponent,
    StudentInfoComponent,
    CourseCreateOrEditComponent,
    SubjectCreateOrEditComponent,
    TopicCreateOrEditComponent,
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
    ChartModule,
    DataViewModule,
    RatingModule,
    RippleModule,
    HttpClientModule,
    MenuModule,
    DialogModule,
  ],
  providers: [
    DialogService,
    ConfirmationService,
    BreadCrumbService,
    ProductService,
    CourseService,
    SubjectService,
    TopicService,
    AdminMngmntService,
  ],
})
export class AdminModule {}
