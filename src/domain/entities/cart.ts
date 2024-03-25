import { randomUUID } from 'node:crypto';
import { Product } from './product';
import { User } from './user';

export class Cart {
  public id: string;
  public products: Product[];
  public total: number;
  public user: User;

  constructor(products: Product[], total: number, user: User, id?: string) {
    this.products = products;
    this.total = total;
    this.user = user;
    this.id = id ?? randomUUID();
  }
}
