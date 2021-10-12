import {Discount} from "./Discount";

export class Product {

  id: string;
  name: string;
  price: number;
  discount: Discount | undefined;
  picture: string | undefined;

  constructor(id: string, name: string, price: number, discount?: Discount, picture?: string) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.picture = picture;
    this.discount = discount;
  }

}
