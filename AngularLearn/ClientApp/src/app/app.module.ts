import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import * as test from './test/testcomponent';
import { NgSelectModule } from '@ng-select/ng-select';
import { BoldDirective } from './directives/bold.directive';
import { PhonesMockService } from './services/phones-mock.service';
import { LoggerService } from './services/logger.service';
import { DropdownComponent } from './commonComponents/dropdown.semanticUI/dropdown';
import { AuthInterceptor } from './httpAuthInterceptor';
import { HTTPLoaderDisplayInterceptor } from './httpLoaderDisplayInterceptor';
import { LoaderComponent } from './commonComponents/loader/component';

export const appRoutes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Home' },
  { path: 'counter', component: CounterComponent, title: 'Counter' },
  { path: 'fetch-data', component: FetchDataComponent, title: 'Fetch Data' },
  { path: 'test', component: test.TestComponent, title: 'Test Component' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    test.TestComponent,
    BoldDirective,
    DropdownComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgSelectModule
  ],
  providers: [LoggerService, PhonesMockService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPLoaderDisplayInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
