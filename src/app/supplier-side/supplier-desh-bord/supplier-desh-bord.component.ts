import { Component, OnInit } from '@angular/core';
import { ProductService } from '../SupplierService/product.service';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InventoryService } from '../SupplierService/inventory.service';

@Component({
  selector: 'app-supplier-desh-bord',
  templateUrl: './supplier-desh-bord.component.html',
  styleUrls: ['./supplier-desh-bord.component.css']
})
export class SupplierDeshBordComponent  implements OnInit {
displayedColumns: any;
announceSortChange($event: Sort) {
throw new Error('Method not implemented.');
}
 TotalProducts: number =0
 TotalOrders: number =0
 TotalWishlistProduct: number =0
 TotalReturnProduct: number =0
 TotalSaleOffers: number =0
 TotalInventory: number =0
 dataSource = new MatTableDataSource();
  constructor(private productService:ProductService,private Inventoryservice:InventoryService) { }
  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe((res:any)=>{
      
      this.TotalProducts = res.length; 
    })
    this.Inventoryservice.GetAllInventorys().subscribe((res:any)=>{
      this.TotalInventory= res.length;
    });
  }

}
