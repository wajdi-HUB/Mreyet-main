import { HTTP_INTERCEPTORS, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';
//const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector:Injector,private router : Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
  let userService=this.injector.get(UserService)
      let tokenizedReq = req.clone({
         headers: req.headers.set(TOKEN_HEADER_KEY, `${userService.getToken()}` ) });
   
   // return next.handle();
   return next.handle(tokenizedReq).pipe(
    tap(
      event => { 
        if (event instanceof HttpResponse)
          console.log('request succeeded');
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if(error.status === 401){
            // this is where you can do anything like navigating

            this.router.navigateByUrl('/login');

          }
        }
      }
    ));





  }
}

