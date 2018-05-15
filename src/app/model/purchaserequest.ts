import { User } from './user';

export class PurchaseRequest {
  Id: number;
  User: User;
  UserName: string;
  Description: string;
  Justification: string;
  DateNeeded: Date;
  DeliveryMode: string;
  Status: string;
  Total: number;
  SubmittedDate: string;
  ReasonForRejection: string;
  
  constructor(inId: number = 0, inUser: User = null, desc: string = '', just: string = '', inDateNeeded: Date = null, delMode: string = '', inStatus: string = '', inTotal: number = 0, subDate: string = '', rej: string = '') {
    this.Id = inId;
    this.User = inUser;
    this.Description = desc;
    this.Justification = just;
    this.DateNeeded = inDateNeeded;
    this.DeliveryMode = delMode;
    this.Status = inStatus;
    this.Total = inTotal;
    this.SubmittedDate = subDate;
    this.ReasonForRejection = rej;
  }
}
