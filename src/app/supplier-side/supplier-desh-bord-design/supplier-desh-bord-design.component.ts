import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-desh-bord-design',
  templateUrl: './supplier-desh-bord-design.component.html',
  styleUrls: ['./supplier-desh-bord-design.component.css']
})
export class SupplierDeshBordDesignComponent implements OnInit  {

  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(['/supplier/ProductDetails'])
  }

}
