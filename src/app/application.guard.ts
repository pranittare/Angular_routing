import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectService } from './connect.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationGuard implements CanActivate {
  constructor(private router: Router, private connectService: ConnectService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const firstNumber = localStorage.getItem('firstNumber')
    const secondNumber = localStorage.getItem('secondNumber')
    if (firstNumber && secondNumber) {
      console.log(firstNumber, secondNumber)
      return true;
    } else {
      console.log(firstNumber, secondNumber)
      alert('Start From Homepage')
      this.router.navigate(['/']);
    }
    // this.connectService.isPresent()
    //   .then(
    //     (present: boolean) => {
    //       if (present) {
    //         return true;
    //       } else {
    //         this.router.navigate(['/']);
    //       }
    //     }
    //   );
  }

}
