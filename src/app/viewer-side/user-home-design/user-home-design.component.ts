import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/supplier-side/SupplierService/product.service';

@Component({
  selector: 'app-user-home-design',
  templateUrl: './user-home-design.component.html',
  styleUrls: ['./user-home-design.component.css']
})
export class UserHomeDesignComponent implements OnInit {
  Title : string | undefined;
  TreandingTitle="Trending Products"
  Filter : string | undefined;
  FilterData:any[]=[];
  constructor(){}
  ngOnInit(): void {
    
  
}
}