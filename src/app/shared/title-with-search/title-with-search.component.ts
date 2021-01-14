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
  title: string = 'AN INTERESTING TITLE !';

  constructor() {}

  ngOnInit(): void {}
}
