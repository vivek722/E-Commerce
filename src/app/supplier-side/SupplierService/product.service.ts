import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/endpoint/endpoin';
import { Product } from '../SupplierModel/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product_Url = endpoints.Product
  constructor(private http:HttpClient) { }

   AddProduct(product:Product):Observable<Product>
  {
    return  this.http.post<Product>(`${this.product_Url}/AddProduct`,product);
  }

  GetAllProducts():Observable<Product>
  {
    return this.http.get<Product>(`${this.product_Url}/GetAllProducts`);
  }

  GetByIdProduct(id:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.product_Url}/AddProduct ${id}`);
  }

  DeleteProduct(id:number):Observable<Product>
  {
    return this.http.delete<Product>(`${this.product_Url}/DeleteProduct ${id}`);
  }

  UpdateProduct(Product:Product):Observable<Product>
  {
    return this.http.put<Product>(`${this.product_Url}/UpdateProduct`,Product);
  }
}
