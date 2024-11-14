import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/supplier-side/SupplierService/product.service';
import { WishListService } from '../ViewerSideService/wish-list.service';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent implements OnInit {
  WishListTitle = "WishList Products";
  WishListData:any;
  constructor(private WishlistService:WishListService){}
  ngOnInit(): void {
   this.WishlistService.GetAllWishlistProducts().subscribe((res:any)=>{
      this.WishListData = res
      console.log(this.WishListData);
      
   }) 
  }
  products: any;
  AddToCart(arg0: any) {
  throw new Error('Method not implemented.');
  }
  
  }
  