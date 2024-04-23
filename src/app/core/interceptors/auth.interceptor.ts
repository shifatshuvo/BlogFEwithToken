import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../modules/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.loadToken();
  
  if (token) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    req = req.clone({ headers: headers });
  }
  return next(req);
};
