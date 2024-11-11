import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-side-bar',
  templateUrl: './supplier-side-bar.component.html',
  styleUrls: ['./supplier-side-bar.component.css']
})
export class SupplierSideBarComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
  //  this.router.navigate(['/DeshboardDesign/Deshboard'])
  }
}
