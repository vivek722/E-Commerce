import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import { SupllierService } from '../SupplierService/supllier.service';
import { ProductService } from '../SupplierService/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  supplierData:any
  productForm!: FormGroup;
  constructor(
    private supplerservice:SupllierService,
     private fb:FormBuilder,
     private productService:ProductService ,
     public dialog: MatDialog,
     private toastr: ToastrService
    ){}
    
    ngOnInit(): void {
      this.supplerservice.GetAllSupplier().subscribe((res:any)=>{
        if(res != null)
        {
          this.supplierData = res
        }
      });
      
      this.productForm = this.fb.group({
        ProductName: ['', Validators.required],
        ProductDesc: ['', Validators.required],
        ProductOrignalprice: ['', Validators.required],
        ProductActualprice: ['', Validators.required],
        SupplierId: ['', Validators.required],
        ProductImages: this.fb.array([this.createFileControl()]) 
      });
    }
  
    get productImages(): FormArray {
      return this.productForm.get('ProductImages') as FormArray;
    }
  
    openModal(): void {
      const dialogRef = this.dialog.open(AddProductComponent, {
        width: '400px',
        data: { suppliers: this.supplierData }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Product data:', result);
        }
      });
  
  }
    createFileControl(): FormGroup {
      return this.fb.group({
        file: [null, Validators.required]
      });
    }
  
    addFileInput() {
      this.productImages.push(this.createFileControl());
    }
  
    async AddProduct() {
    var ProductData = this.productForm.getRawValue();
    console.log(ProductData);
    
     (await this.productService.AddProduct(ProductData)).subscribe(res => {
      console.log(res);
      if(res != null)
      {
        this.toastr.success("Product added successfully");
      }
    })
  }
  CloseAddProductDailog() {
    this.dialog.closeAll();
  }   
}
