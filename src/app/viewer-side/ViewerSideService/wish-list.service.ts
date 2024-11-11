import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/endpoint/endpoin';
import { WishList } from '../ViewSideModel/WishList';

@Injectable({
  providedIn: 'root'
})
export class WishListService {


  WishList_Url =endpoints.WishList
  constructor(private http:HttpClient) { }

  GetAllWishlistProducts():Observable<WishList>
  {
    return this.http.get<WishList>(`${this.WishList_Url}/GetAllWishlistProducts`);
  }
  AddWishlistProduct(product:WishList):Observable<WishList>
  {
    return this.http.post<WishList>(`${this.WishList_Url}/AddWishlistProduct`,product);
  }

  GetByIdWishlistProduct(id:number):Observable<WishList>
  {
    return this.http.get<WishList>(`${this.WishList_Url}/AddProduct ${id}`);
  }

  DeleteWishlistProduct(id:number):Observable<WishList>
  {
    return this.http.delete<WishList>(`${this.WishList_Url}/DeleteWishlistProduct ${id}`);
  }

  UpdateWishlistProduct(Product:WishList):Observable<WishList>
  {
    return this.http.put<WishList>(`${this.WishList_Url}/UpdateWishlistProduct`,Product);
  }
  isProductInWishlist(productId: number):Observable<WishList>  {
    return this.http.get<WishList>(`${this.WishList_Url}/AddProduct ${productId}`);
  }
}
