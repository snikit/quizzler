import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-title-with-search',
  templateUrl: './title-with-search.component.html',
  styleUrls: ['./title-with-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleWithSearchComponent implements OnInit {
  filtersShown = false;
  searchExpanded = false;

  @Input()
  color: string;

  @Input()
  back = false;
  @Input()
  backurl: string = '';

  @Input()
  icon = false;
  @Input()
  iconClass: string = '';

  @Input()
  title: string = 'AN INTERESTING TITLE !';

  @Input()
  search = true;

  constructor() {}

  ngOnInit(): void {}
}
