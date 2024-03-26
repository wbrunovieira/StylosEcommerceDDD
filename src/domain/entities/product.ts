import { Color } from './color';
import { Size } from './size';
import { Material } from './material';
import { Slug } from './value-objects/slug';
import { Entity } from '../../core/entities/entity';

interface ProductProps {
  name: string;
  description: string;
  color: Color[];
  size: Size[];
  material: Material[];
  brandID: string;
  price: number;
  stock: number;
  slug: Slug;
}

export class Product extends Entity<ProductProps> {}
