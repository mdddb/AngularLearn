import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from './service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-loader',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        opacity: 1,
        display: 'block'
      })),
      state('hidden', style({
        opacity: 0,
        display: 'none'
      })),
      transition('shown => hidden', [
        animate('0.2s')
      ]),
      transition('hidden => shown', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) { }
  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
