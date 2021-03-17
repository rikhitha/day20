export class Bankclass 
{
    cid!:string; 
    customertype!:string;
    creditcardtype!:string;
    currency!:string;
    country!:string;
    city!:string;
    constructor(cid:string,customertype:string,creditcardtype:string,currency:string,country:string,city:string)
    {
    this.cid=cid; 
    this.customertype=customertype;
    this.creditcardtype=creditcardtype;
    this.currency=currency;
    this.country=country;
    this.city=city;

    }
}
