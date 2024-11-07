import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/endpoint/endpoin';
import { WishList } from '../ViewSideModel/WishList';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  Supplier_Url =endpoints.WishList
  constructor(private http:HttpClient) { }

  GetAllSupplier():Observable<WishList>
  {
    return this.http.get<WishList>(`${this.Supplier_Url}/GetAllSuppliers`);
  }
  AddSuppliers(product:WishList):Observable<WishList>
  {
    return this.http.post<WishList>(`${this.Supplier_Url}/AddSupplier`,product);
  }

  GetByIdSupplier(id:number):Observable<WishList>
  {
    return this.http.get<WishList>(`${this.Supplier_Url}/AddProduct ${id}`);
  }

  DeleteSupplier(id:number):Observable<WishList>
  {
    return this.http.delete<WishList>(`${this.Supplier_Url}/DeleteSupplier ${id}`);
  }

  UpdateSupplier(Product:WishList):Observable<WishList>
  {
    return this.http.put<WishList>(`${this.Supplier_Url}/UpdateSupplier`,Product);
  }
}
