import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { TooltipModule } from 'primeng/tooltip';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';

@NgModule({
  declarations: [AdminComponent, AdminHomeComponent, AdminSideNavComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, TooltipModule],
})
export class AdminModule {}
