import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../../account/account.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const authService: AccountService = inject(AccountService);
  const router: Router = inject(Router);
  return authService.currentUser$.pipe(
    map(auth => {
      if (auth)         
        return true
      else {
       router.navigate(['account/login'], { queryParams: { returnUrl: state.url } })
       return false
      }
    })
  )
};
