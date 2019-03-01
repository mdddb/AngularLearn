import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoaderService } from './commonComponents/loader/service';

@Injectable()
export class HTTPLoaderDisplayInterceptor implements HttpInterceptor {
  private activeRequestsCount: number = 0;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loaderService.show();
    this.activeRequestsCount++;
    return next.handle(req).pipe(
      tap(ev => {
        if (ev.type == HttpEventType.Response) {
          this.activeRequestsCount--;
          if (this.activeRequestsCount == 0)
            this.loaderService.hide();
        }
      }));
  }
  constructor(private loaderService: LoaderService) { }
}
