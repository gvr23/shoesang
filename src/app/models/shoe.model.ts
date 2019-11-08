export class Shoe {
  public model: string;
  public color: string;
  public size: string;
  public quantity: number;
  public status: string;
  public creationDate: string;

  constructor(
    model: string,
    color: string,
    size: string,
    quantity: number,
    status: string,
    creationDate: string) {
    this.model = model;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    this.status = status;
    this.creationDate = creationDate;
  }
}
