export class Customerclass 
{
  cusid!:number;
  cuscuscid!:string;
  cusamount!:number;
  cuscurrency!:string;
  cusfrom!:number;
  custo!:number;
  cusbankcharge!:number;
  constructor(cusid:number,cuscuscid:string,cusamount:number,cuscurrency:string,cusfrom:number,custo:number,cusbankcharge:number)
  {
      this.cusid=cusid;
      this.cuscuscid=cuscuscid;
      this.cusamount=cusamount;
      this.cuscurrency=cuscurrency;
      this.cusfrom=cusfrom;
      this.custo=custo;
      this.cusbankcharge=cusbankcharge;

  }
}
