import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InventoryService } from '../SupplierService/inventory.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddInventoryComponent } from '../add-inventory/add-inventory.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-details-about-inventory',
  templateUrl: './details-about-inventory.component.html',
  styleUrls: ['./details-about-inventory.component.css']
})
export class DetailsAboutInventoryComponent implements OnInit {

  inventoryData:any[]=[];
  dataSource:any;


  constructor(private _liveAnnouncer: LiveAnnouncer,public dialog: MatDialog,private Inventoryservice:InventoryService){}
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayInventoryData();
  }

displayedColumns: string[] = ['Product Image','Product Name','quantity','warehouse Name','location','Action'];

announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
AddInventory(data?:any) {
  const dialogRef = this.dialog.open(AddInventoryComponent,{
    data,
  });
  dialogRef.afterClosed().subscribe(result => {
    this.displayInventoryData();
  });
}

displayInventoryData() {
    this.Inventoryservice.GetAllInventorys().subscribe((res:any)=>{
      this.inventoryData = res
       this.dataSource = new MatTableDataSource(this.inventoryData);
       this.dataSource.paginator = this.paginatior;
       this.dataSource.sort = this.sort;
    })
  }

}
