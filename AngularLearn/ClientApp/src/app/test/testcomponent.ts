import { Component, Inject, Input, EventEmitter, Output, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'testcomponent',
  templateUrl: './testcomponent.html'
})
export class TestComponent implements OnInit, OnDestroy {
  ngOnDestroy(...params): void {
    this.log(params);
  }
  ngOnInit(...params): void {
    this.log(params);
  }
  @ViewChild('ngSelectElement') ngSelectElement: NgSelectComponent;
  name = "Murat";

  dropdownValues: DropdownOption[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    for (var i = 0; i < 150; i++) {
      this.dropdownValues.push({ value: i.toString(), label: "Test" + i });
    }
  }
  log(...params: any[]) {
    console.log(params);
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
    console.log(this);
    this.valueChange.emit(value.value);
  }
}
