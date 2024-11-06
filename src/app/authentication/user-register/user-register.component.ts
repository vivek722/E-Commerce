import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { Router } from '@angular/router';
import { RoleServiceService } from 'src/app/shared/CommanService/role-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  DataSource!: FormGroup;
  RoleData: any;
  
    constructor(
      private fb: FormBuilder,
      private authService: AuthenticationService,
      private Roleserver:RoleServiceService,
      private router: Router
    ) {
   
    }
    ngOnInit(): void {
      this.Roleserver.GetAllRole().subscribe((res:any)=>
        this.RoleData =res
      );
  
      this.DataSource = this.fb.group({
        UserName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        PasswordHash: ['', Validators.required],
        RoleId: [1],
        Street: [''],
        City: [''],
        State: [''],
        ZipCode: ['']
      });
    }
  
    RegisterUser() {
      if (this.DataSource.invalid) {
        alert("Please fill out all required fields.");
        return;
      }
  
      this.authService.Register(this.DataSource.value).subscribe({
        next: response => {
          console.log('Registration successful', response);
          alert("Registration successful!");
          this.router.navigate(['/login']); // Redirect after successful registration
        },
        error: error => {
          console.error('Registration failed', error);
          alert("Registration failed. Please try again.");
        }
      });
    }
}
