import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-admin-testmaker',
  templateUrl: './admin-testmaker.component.html',
  styleUrls: ['./admin-testmaker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTestmakerComponent implements OnInit {
  newPage = false;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  createTest() {
    // const dialogRef = this.dialogService.open(CreateTestComponent, {
    //   showHeader: false,
    //   baseZIndex: 10000,
    //   dismissableMask: true,
    //   style: { 'border-radius': '30px' },
    //   contentStyle: { 'border-radius': '30px' },
    // });
    // dialogRef.onClose.subscribe((something) => {
    //   console.log(something);
    // });
  }
}
