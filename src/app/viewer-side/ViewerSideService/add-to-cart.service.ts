import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/endpoint/endpoin';
import { AddToCart } from '../ViewSideModel/AddToCart';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  
  AddToCart_URL =endpoints.AddToCart
  constructor(private http:HttpClient) { }

  GetAllCartProducts():Observable<AddToCart>
  {
    return this.http.get<AddToCart>(`${this.AddToCart_URL}/GetAllCartProducts`);
  }
  AddCartProduct(product:AddToCart):Observable<AddToCart>
  {
    return this.http.post<AddToCart>(`${this.AddToCart_URL}/AddCartProduct`,product);
  }

  GetByIdCartProduct(id:number):Observable<AddToCart>
  {
    return this.http.get<AddToCart>(`${this.AddToCart_URL}/AddProduct ${id}`);
  }

  DeleteProductInCart(id:number):Observable<AddToCart>
  {
    return this.http.delete<AddToCart>(`${this.AddToCart_URL}/DeleteProductInCart ${id}`);
  }

  UpdateCartProduct(Product:AddToCart):Observable<AddToCart>
  {
    return this.http.put<AddToCart>(`${this.AddToCart_URL}/UpdateCartProduct`,Product);
  }
  isProductInCart(ProductId: number, userId: number) {
    return this.http.get<AddToCart>(`${this.AddToCart_URL}/isProductInCart?ProductId=${ProductId}&UserId=${userId}`);
  }
}
