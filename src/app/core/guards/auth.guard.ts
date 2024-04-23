import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../../modules/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let authService = inject(AuthService);
  
  if (!authService.signedIn) {
    void router.navigate(['/auth/sign-in']);
    return false;
  }
  
  return true;
};
