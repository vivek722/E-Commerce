import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/supplier-side/SupplierService/product.service';
import { AddToCartService } from '../ViewerSideService/add-to-cart.service';
import { WishListService } from '../ViewerSideService/wish-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: any;
  AddToCartproducts!: FormGroup;
  Wishlistproducts!: FormGroup;
  WishListData: any[] = [];
  userId = 3;
  @Input() Title: string | undefined;
WishData: any;

  constructor(
    private productService: ProductService,
    private addToCartService: AddToCartService,
    private wishlistService: WishListService,
    private formBuilder: FormBuilder,
    private tosterService: ToastrService 
  ) {}

  ngOnInit(): void {
    if(this.Title == "WishList Products")
    {
      this.wishlistService.GetAllWishlistProducts().subscribe((res: any) => {
        this.products = res;
        if (this.products) {
          console.log("This is a list of all products:", this.products);
        }
      });
    }
    else if(this.Title == "Trending Products")
    {
    this.productService.GetAllProducts().subscribe((res: any) => {
      this.products = res;
      if (this.products) {
        console.log("This is a list of all products:", this.products);
      }
    });
    }
  }

  AddToWishlist(ProductId: number) {
    this.Wishlistproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserId: [this.userId]
    });
    this.wishlistService.isProductInWishlist(ProductId, this.userId).subscribe((res: any) => {
      if (res) {
        this.tosterService.warning("Product already added In Wishlist")
      } else {
        this.wishlistService.AddWishlistProduct(this.Wishlistproducts.value).subscribe((res: any) => {
          if (res) {
            this.WishListData.push(this.Wishlistproducts.value); 
            this.tosterService.success("Product added successfully In Wishlist")
          }
        });
      }
    });
  }

  AddToCart(ProductId: number) {
    this.AddToCartproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserId: [this.userId],
      Quantity: [1]
    });
    this.addToCartService.isProductInCart(ProductId, this.userId).subscribe((res: any) => {
      if (res) {
        this.tosterService.warning("Product already added In Cart")
      } else {
        this.addToCartService.AddCartProduct(this.AddToCartproducts.value).subscribe((res: any) => {
          if (res) {
            this.WishListData.push(this.AddToCartproducts.value); 
            this.tosterService.success("Product added successfully In Cart")
          }
        });
      }
    });
  }
}
