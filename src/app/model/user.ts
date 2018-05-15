export class User {
  Id: number;
  UserName: string;
  Password: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  Reviewer: boolean;
  Admin: boolean;
  
  constructor(inId: number = 0, inUserName: string = '', inPassword: string = '', inFirstName: string = '', inLastName: string = '', inPhoneNumber: string = '', inEmail: string = '', inReviewer: boolean = false, inAdmin: boolean = false) {
    this.Id = inId;
    this.UserName = inUserName;
    this.Password = inPassword;
    this.FirstName = inFirstName;
    this.LastName = inLastName;
    this.PhoneNumber = inPhoneNumber;
    this.Email = inEmail;
    this.Reviewer = inReviewer;
    this.Admin = inAdmin;
  }
  
  about(): string {
    return "UserName = "+this.UserName+", FirstName = "+this.FirstName+", LastName = "+this.LastName;
  }
   
}
