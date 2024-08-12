import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize } from 'rxjs';
import { BusyService } from '../services/busy.service';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService: BusyService = inject(BusyService);
  ('emailExists');
  if (
    req.url.includes('emailExists') ||
    (req.method === 'POST' && req.url.includes('orders')) ||
    req.method==='DELETE'
  ) {
    return next(req);
  }
  busyService.busy();
  return next(req).pipe(
    delay(1000),
    finalize(() => busyService.idle())
  );
};
