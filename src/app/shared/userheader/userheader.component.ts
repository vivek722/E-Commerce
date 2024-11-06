import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit  {  
  
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(['/test/home'])
  }
  Login() {
    this.router.navigate(['/Login'])
  }
  UserRegister() {
    this.router.navigate(['/UserRegister'])
  }
}
