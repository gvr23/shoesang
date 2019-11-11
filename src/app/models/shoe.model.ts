export class Shoe {
  public shoeId: number;
  public model: string;
  public color: string;
  public size: string;
  public quantity: number;
  public status: string;
  public creationDate: string;
  public imagePath: string;

  constructor(
    id: number,
    model: string,
    color: string,
    size: string,
    quantity: number,
    status: string,
    creationDate: string,
    imagePath: string) {
    this.shoeId = id;
    this.model = model;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    this.status = status;
    this.creationDate = creationDate;
    this.imagePath = imagePath;
  }
}
