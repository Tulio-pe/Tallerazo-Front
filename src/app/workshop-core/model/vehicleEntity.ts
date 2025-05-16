export class Vehicle {
  private plate: string;
  private brand: string;
  private model: string;
  private year: string;
  private  changeofstate:boolean=false;
  private status: string="Entregado";
  constructor( plate:string, brand:string, mode:string, year:string) {
    this.plate = plate;
    this.brand = brand;
    this.model = mode;
    this.year = year;
  }
  public get fullInfo(): string {
    return `${this.brand} ${this.model} ${this.year} ${this.plate}`;
  }
  public get Plate(): string {
    return this.plate;
  }
  public get Brand():string{
    return this.brand;
  }
  public get Model():string{
    return this.model;
  }
  public get Year():string{
    return this.year;
  }
  public get Changeofstate():boolean{
    return this.changeofstate;
  }
  public set Changeofstate(value:boolean){
    this.changeofstate=value;
  }
  public get Status(): string {
    return this.status;
  }

  public set Status(value: string) {
    this.status = value;
  }
}
