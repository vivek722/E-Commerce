export interface Product {
    ProductName: string;
    ProductDesc: string; // Use lowercase 's' for string
    ProductOrignalprice: number; // Change DoubleRange to number
    ProductActualprice: number; // Change DoubleRange to number
    ProductImag: File[]; // Change String to File[]
    SupplierId: number;
  }