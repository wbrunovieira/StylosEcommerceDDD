import { randomUUID } from 'crypto';
import { Color } from './color';
import { Size } from './size';
import { Material } from './material';

interface ProductProps {
  name: string;
  description: string;
  color: Color[];
  size: Size[];
  material: Material[];
  brandID: string;
  price: string;
  stock: number;
}

export class Product {
  public id: string;
  public name: string;
  public description: string;
  public color: Color[];
  public size: Size[];
  public material: Material[];
  public brandID: string;
  public price: string;
  public stock: number;

  constructor(props: ProductProps, id?: string) {
    this.name = props.name;
    this.description = props.description;
    this.color = props.color;
    this.size = props.size;
    this.material = props.material;
    this.brandID = props.brandID;
    this.price = props.price;
    this.stock = props.stock;
    this.id = id ?? randomUUID();
  }
}
