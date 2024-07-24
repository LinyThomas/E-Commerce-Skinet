import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../../account/account.service';
import { inject } from '@angular/core';
import { take } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  var token;
  const accService: AccountService = inject(AccountService);
  accService.currentUser$.pipe(take(1)).subscribe(
    {
      next: user => {
        token = user?.token;
      }
   }
  )
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization:`Bearer ${token}`
      }
    })
  }
  return next(req);
};
