import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (state.url === '/user' || state.url === '/register') {
      return true; // No protegemos estas rutas
    }

    const token = sessionStorage.getItem('token');
    if (token) {
      // Si el token existe, se puede acceder a la ruta
      return true;
    } else {
      // Si no hay token, redirigir al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
