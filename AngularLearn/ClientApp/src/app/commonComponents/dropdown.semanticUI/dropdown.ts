import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Event } from "@angular/router";

declare var $: any;
@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html',
  providers: []
})
export class DropdownComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild("dropdownElement") dropdownElement: ElementRef;

  @Input() options: any[];
  @Input() disabled: any;
  @Input()
  value: any;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  onHiddenValueFieldChange(event) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }

  @Input() dataValue: any;
  @Input() dataText: any;

  GetDataValue(item: any) {
    return item[this.dataValue];
  }
  GetDataText(item: any) {
    return item[this.dataText];
  }

  ngOnChanges(changes: SimpleChanges): void {
    let valueChange = changes.value;
    if (valueChange && valueChange.isFirstChange() != true && valueChange.currentValue != valueChange.previousValue) {
      $(this.dropdownElement.nativeElement).dropdown("set selected", valueChange.currentValue);
    }
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    $(this.dropdownElement.nativeElement).dropdown();
  }
}
