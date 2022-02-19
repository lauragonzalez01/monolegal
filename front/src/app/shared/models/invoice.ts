export interface Invoice {
  Code: string;
  ClientId: number;
  City: string;
  Total: number;
  SubTotal: number;
  VAT: number;
  Retention: number;
  CreationDate: Date;
  State: string;
  Paid: boolean;
  PaidDate: Date;
}
