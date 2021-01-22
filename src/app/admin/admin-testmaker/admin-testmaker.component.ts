import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin-testmaker',
  templateUrl: './admin-testmaker.component.html',
  styleUrls: ['./admin-testmaker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTestmakerComponent implements OnInit {
  newPage = false;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  // cancelTest() {
  //   const dialogRef = this.dialogService.open(CreateTestComponent, {
  //     showHeader: false,
  //     baseZIndex: 10000,
  //     dismissableMask: true,
  //     style: { 'border-radius': '30px' },
  //     contentStyle: { 'border-radius': '30px' },
  //   });
  //   dialogRef.onClose.subscribe((something) => {
  //     console.log(something);
  //   });
  // }

  cancelTest() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.newPage = false;
      },
      reject: () => {},
      key: 'positionDialog',
    });
  }
}
