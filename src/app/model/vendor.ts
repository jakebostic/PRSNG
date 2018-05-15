export class Vendor {
  Id: number;
  Code: string;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  PhoneNumber: string;
  Email: string;
  PreApproved: boolean;
  
  constructor(inId: number = 0, inCode: string = '', inName: string = '', inAddress: string = '', inCity: string = '', inState: string = '', inZip: string = '', inPhoneNumber: string = '', inEmail: string = '', inPreApproved: boolean = false) {
    this.Id = inId;
    this.Code = inCode;
    this.Name = inName;
    this.Address = inAddress;
    this.City = inCity;
    this.State = inState;
    this.Zip = inZip;
    this.PhoneNumber = inPhoneNumber;
    this.Email = inEmail;
    this.PreApproved = inPreApproved;
  }
  
  about(): string {
    return "Code = "+this.Code+", Name = "+this.Name+", Address = "+this.Address;
  }
  
  
}
