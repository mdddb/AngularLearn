import { Component } from '@angular/core';
import { PhonesMockService } from './services/phones-mock.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PhonesMockService, LoggerService]
})
export class AppComponent {
  title = 'app';
}
