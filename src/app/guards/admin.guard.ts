import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.hasToken()) return true

    alert('you dont have permissions')
    this.router.navigate([''])
    return false
  }
  
  constructor(private router: Router, private cookieService: CookieService){}

  hasToken(): boolean {
    if(this.cookieService.get('token')) return true

    return false
  }
}
