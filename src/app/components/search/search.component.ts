import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
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
