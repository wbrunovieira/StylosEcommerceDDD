import { randomUUID } from 'crypto';
import { Color } from './color';
import { Size } from './size';
import { Material } from './material';
import { Brand } from './brand';

export class Product {
  public id: string;
  public name: string;
  public description: string;
  public color: Color[];
  public size: Size[];
  public material: Material[];
  public brand: Brand[];
  public price: string;
  public stock: number;

  constructor(
    name: string,
    description: string,
    color: Color[],
    size: Size[],
    material: Material[],
    brand: Brand[],
    price: string,
    stock: number,
    id?: string
  ) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.description = description;
    this.color = color;
    this.size = size;
    this.material = material;
    this.brand = brand;
    this.price = price;
    this.stock = stock;
  }
}
