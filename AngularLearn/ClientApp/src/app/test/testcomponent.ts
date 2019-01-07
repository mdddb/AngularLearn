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
export class TestComponent {
  items: any[];
  value: any;
  constructor() {
    let items = [];
    for (let i = 1; i <= 20; i++) {
      items.push({
        ID: i.toString(),
        Name: "test_" + i
      });
    }
    this.items = items;
  }
}
