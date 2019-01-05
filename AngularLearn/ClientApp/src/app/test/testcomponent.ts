import { Component, Inject, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'testcomponent',
  templateUrl: './testcomponent.html'
})
export class TestComponent {
  name = "Murat";
  dropdownValues: DropdownOption[] = [
    {
      label: "test",
      value: "testID"
    },
    {
      label: "test2",
      value: "testID2"
    },
    {
      label: "test3",
      value: "testID3"
    }
  ];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  }
}

export interface DropdownOption {
  value: string;
  label: string;
}

@Component({
  selector: 'asd',
  template: `
    <ul>
      <li *ngFor="let option of options" (click)="select(option)" [ngClass]="{ 'font-weight-bold': option.value == value  }">{{option.label}}</li>
    </ul>
  `
})
export class ChildComponent {
  @Input()
  options: DropdownOption[];

  @Input()
  value: string;

  @Output()
  valueChange = new EventEmitter<any>();

  select(value) {
    this.valueChange.emit(value.value);
  }
}
