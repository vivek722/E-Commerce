import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/supplier-side/SupplierService/product.service';

@Component({
  selector: 'app-user-home-design',
  templateUrl: './user-home-design.component.html',
  styleUrls: ['./user-home-design.component.css']
})
export class UserHomeDesignComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    
    this.productService.GetAllProducts().subscribe((res: any) => {
      this.products = res;
      if(this.products)
      {
        console.log("this is list of all products");
        
      }
      console.log(this.products);;
      
    });
  }
}
