import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './AuthenticationService/authentication.service'; // Import your authentication service
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    const userRole = this.authService.getUserRoleId(); // Replace with actual method to get RoleId

    if (userRole === "Customer") {
      this.router.navigate(['/Home']);
      return false; 
    } else if (userRole === "Supplier") {
      this.router.navigate(['/supplier']);
      return false; 
    }

    
    this.router.navigate(['/unauthorized']); // Optional: Redirect if RoleId is not 3 or 4
    return false;
  }
}
