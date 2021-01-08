import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { TooltipModule } from 'primeng/tooltip';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminQuestionBankComponent } from './admin-question-bank/admin-question-bank.component';
import { AdminQuestionBankFabComponent } from './admin-question-bank-fab/admin-question-bank-fab.component';
import { TableModule } from 'primeng/table';
import { AdminTestmakerComponent } from './admin-testmaker/admin-testmaker.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { CreateTestComponent } from './create-test/create-test.component';
import { AccordionModule } from 'primeng/accordion';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { TestListComponent } from './test-list/test-list.component';
import { TestViewComponent } from './test-view/test-view.component';
import { ChipModule } from 'primeng/chip';
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
  ],
  providers: [DialogService, ConfirmationService],
})
export class AdminModule {}
