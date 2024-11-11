import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/endpoint/endpoin';
import { AddToCart } from '../ViewSideModel/AddToCart';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  Supplier_Url =endpoints.AddToCart
  constructor(private http:HttpClient) { }

  GetAllCartProducts():Observable<AddToCart>
  {
    return this.http.get<AddToCart>(`${this.Supplier_Url}/GetAllCartProducts`);
  }
  AddCartProduct(product:AddToCart):Observable<AddToCart>
  {
    return this.http.post<AddToCart>(`${this.Supplier_Url}/AddCartProduct`,product);
  }

  GetByIdCartProduct(id:number):Observable<AddToCart>
  {
    return this.http.get<AddToCart>(`${this.Supplier_Url}/AddProduct ${id}`);
  }

  DeleteProductInCart(id:number):Observable<AddToCart>
  {
    return this.http.delete<AddToCart>(`${this.Supplier_Url}/DeleteProductInCart ${id}`);
  }

  UpdateCartProduct(Product:AddToCart):Observable<AddToCart>
  {
    return this.http.put<AddToCart>(`${this.Supplier_Url}/UpdateCartProduct`,Product);
  }
}
