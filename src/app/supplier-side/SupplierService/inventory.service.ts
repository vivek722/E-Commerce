import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/endpoint/endpoin';
import { Inventory } from '../SupplierModel/Inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  Iventory_Url = endpoints.Inventory
  constructor(private http:HttpClient) { }

AddInventory(Iventory:Inventory): Observable<Inventory>
{
  return this.http.post<Inventory>(`${this.Iventory_Url}/AddInventory`,Iventory)
}

GetAllInventorys():Observable<Inventory>
{
  return this.http.get<Inventory>(`${this.Iventory_Url}/GetAllInventory`);
}

GetByIdInventory(id:number):Observable<Inventory>
{
  return this.http.get<Inventory>(`${this.Iventory_Url}/AddProduct ${id}`);
}

DeleteInventory(id:number):Observable<Inventory>
{
  return this.http.delete<Inventory>(`${this.Iventory_Url}/DeleteInventory ${id}`);
}

UpdateInventory(Product:Inventory):Observable<Inventory>
{
  return this.http.put<Inventory>(`${this.Iventory_Url}/UpdateInventory`,Product);
}
}
