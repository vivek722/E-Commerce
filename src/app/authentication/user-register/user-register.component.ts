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
        RoleId: [4],
        Street: [''],
        City: [''],
        State: [''],
        ZipCode: ['']
      });
    }
  
    RegisterUser() {
      var registerData = this.DataSource.getRawValue();
      this.authService.Register(registerData).subscribe((res: any) => {
        if(res != null) {
          console.log("successfully");
          
        }
    });
  }
}
