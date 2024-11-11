import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/supplier-side/SupplierService/product.service';
import { AddToCartService } from '../ViewerSideService/add-to-cart.service';
import { WishListService } from '../ViewerSideService/wish-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: any;
  AddToCartproducts!:FormGroup ;
  Wishlistproducts!: FormGroup;
  @Input() Title : string | undefined;
  constructor(private productService: ProductService,private AddTocartservice:AddToCartService,private WishlistService:WishListService,private Frombuilder:FormBuilder){}

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

    AddToWishlist(ProductId:number) {
      this.Wishlistproducts = this.Frombuilder.group({
        ProductId: [ProductId],
        UserId: [3]
      })
      this.WishlistService.AddWishlistProduct(this.Wishlistproducts.value).subscribe((res:any)=>{
        if(res.success)
        {
          alert("Product Added to wishlist");
        }
      })
    }
    AddToCart(ProductId:number) {
      this.AddToCartproducts = this.Frombuilder.group({
        ProductId: [ProductId],
        UserId: [3],
        Quantity: [1]
      })
      this.AddTocartservice.AddCartProduct(this.AddToCartproducts.value).subscribe((res:any)=>{
        if(res.success)
        {
          alert("Product Added to AddToCart");
        }
      })
    }
    isInWishlist(productId: number): boolean {
      var WishListData =this.WishlistService.isProductInWishlist(productId);
      if(WishListData)
      {
        return true;
      }
      return false;
    }
}
