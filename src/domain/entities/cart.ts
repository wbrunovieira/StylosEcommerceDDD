import { randomUUID } from 'node:crypto';
import { Product } from './product';

interface CartProps {
  products: Product[];
  total: number;
  userId: string;
}

export class Cart {
  public id: string;
  public products: Product[];
  public total: number;
  public userId: string;

  constructor(props: CartProps, id?: string) {
    this.products = props.products;
    this.total = props.total;
    this.userId = props.userId;
    this.id = id ?? randomUUID();
  }
}
