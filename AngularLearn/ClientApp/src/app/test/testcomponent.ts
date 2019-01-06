import { Component, Inject, Input, EventEmitter, Output, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgSelectComponent } from '@ng-select/ng-select';
import { PhonesMockService } from '../services/phones-mock.service';
import { Phone } from '../models/phone';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'testcomponent',
  templateUrl: './testcomponent.html',
  providers: []
})
export class TestComponent implements OnInit {
  items: Phone[] = [];
  constructor(private dataService: PhonesMockService) { }

  addItem(name: string, price: number) {

    this.dataService.addData(name, price);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
