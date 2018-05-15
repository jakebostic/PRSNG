import { Vendor } from './vendor';

export class Product {
  Id: number;
  Vendor: Vendor;
  PartNumber: string;
  Name: string;
  Price: number;
  Unit: string;
  PhotoPath: string;
  
  constructor(inId: number = 0, inVendor: Vendor = null, inPartNumber: string = '', inName: string = '', inPrice: number = 0.0, inUnit: string = '', inPhotoPath: string = '') {
    this.Id = inId;
    this.Vendor = inVendor;
    this.PartNumber = inPartNumber;
    this.Name = inName;
    this.Price = inPrice;
    this.Unit = inUnit;
    this.PhotoPath = inPhotoPath;
  }
  
  about(): string {
    return "Id = "+this.Id+", PartNumber = "+this.PartNumber+", Name = "+this.Name+", Price = "+this.Price+", Unit = "+this.Unit+", PhotoPath = "+this.PhotoPath;
  }
}


