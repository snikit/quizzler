import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-candidate-nav',
  templateUrl: './candidate-nav.component.html',
  styleUrls: ['./candidate-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
