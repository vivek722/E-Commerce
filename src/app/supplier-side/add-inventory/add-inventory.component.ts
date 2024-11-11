import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../SupplierService/inventory.service';
import { ProductService } from '../SupplierService/product.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  ProductData:any
  InventoryData!:FormGroup
  constructor(private frombuilder:FormBuilder,private inventoryservice:InventoryService,private Productservice:ProductService,private dialogRef: MatDialogRef<AddInventoryComponent>) { }
  ngOnInit(): void {
    this.Productservice.GetAllProducts().subscribe((res:any)=>{
      if(res != null)
      {
        this.ProductData = res
      }
      console.log(this.ProductData);
    });

   this.InventoryData  = this.frombuilder.group({
    product_id:[0,Validators.required],
    WarehouseName:['',Validators.required],
    Location:['',Validators.required],
    Quantity:['',Validators.required]
   })
  }

AddInventory() {
if(this.InventoryData.valid)
{
  var inventoryData = this.InventoryData.getRawValue();
  this.inventoryservice.AddInventory(inventoryData).subscribe(res => {
    if(res != null)
    {
      console.log("Data Insert SuccessFully");
      
    }
  })
}
}
CloseAddInventoryDailog() {
 this.dialogRef.close();
}
}
