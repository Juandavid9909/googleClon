import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input()
  currentTermValue: any;

  @Input()
  rightIcon: any;

  constructor() {
    this.rightIcon = "true";
  }
}
