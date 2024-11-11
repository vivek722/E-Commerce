import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from '../SupplierService/product.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-details-about-product',
  templateUrl: './details-about-product.component.html',
  styleUrls: ['./details-about-product.component.css']
})
export class DetailsAboutProductComponent implements OnInit {


  AllProducts: any[] = [];
  dataSource:any;

constructor(private productService:ProductService,public dialog:MatDialog,private _liveAnnouncer:LiveAnnouncer){}

@ViewChild(MatPaginator) paginatior!: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayProductData();
  }
displayedColumns: string[] = ['Product Image','Product Name', 'Product Description', 'Product Orignal Price', 'Product Offer Price','Action'];

AddProduct(data?:any) {
  const dialogRef = this.dialog.open(AddProductComponent,{
    data,
  });
  dialogRef.afterClosed().subscribe(result => {
    this.displayProductData();
  });
  }
  displayProductData() {
    this.productService.GetAllProducts().subscribe((res:any)=>{
      this.AllProducts = res;      
      this.dataSource = new MatTableDataSource(this.AllProducts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginatior;
    })
  }
announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}

}
