import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { IdVO } from '../@data/vo/mngmnt-vo';

@Component({
  selector: 'app-common-mngmnt',
  templateUrl: './common-mngmnt.component.html',
  styleUrls: ['./common-mngmnt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonMngmntComponent implements OnInit {
  @Input()
  title: string = 'title';

  @Input()
  items: IdVO[];

  itemProps: string[];
  @Input()
  iconClass: string = '';

  constructor() {}

  ngOnInit(): void {
    this.itemProps = Object.keys(this.items[0]);
  }
}
