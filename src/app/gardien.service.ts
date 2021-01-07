import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GardienService implements CanActivate {

 // on injecte par dépendance le service UserService
 constructor(private aS: UserService, private router: Router) {}

 canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): any | boolean {

   if (this.aS.authenticated()) {
     console.log('login...');
     return true;
   };

   if (this.aS.authenticated() == false) {
     console.log('no login...');
     this.router.navigate(['/login'], {
       queryParams: { messageError: 'Error authentification' }
     });
   }

 }
}
