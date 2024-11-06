import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../AuthenticationService/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private authservice: AuthenticationService,
    private formbuilder: FormBuilder,
    private route: Router,
  ) {}

  DataSource: FormGroup | null = null;

  ngOnInit(): void {
    this.DataSource = this.formbuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  LoginUser() {
    if (this.DataSource?.valid) {
      const LoginData = this.DataSource.getRawValue();
      this.authservice.login(LoginData).subscribe((res: any) => {
      if(res != null)
      {
       // this.Toster.success("Login SuccessFully")
        this.route.navigate(['/Home']);
      }
      });
    }
  }
}
