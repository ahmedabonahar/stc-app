import { Router } from '@angular/router';
//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  loaderToShow: any;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private _Router: Router
  ) { }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    debugger;
    //handle your auth error or rethrow
    if (err.status === 403) {
      this._Router.navigateByUrl(`/login`);
      return of(err); // or EMPTY may be appropriate here
    }
    return throwError(err);
  }



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngxLoader.start();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        this.ngxLoader.stop();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.ngxLoader.stop();
        this.handleAuthError(error);
        return throwError(error);
      }));

  }
}
