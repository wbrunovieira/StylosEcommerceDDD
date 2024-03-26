import { Slug } from './value-objects/slug';
import { Entity } from '../../core/entities/entity';

import { UniqueEntityID } from '../../core/entities/unique-entity-id';

interface ProductProps {
  name: string;
  description: string;
  colorId: UniqueEntityID[];
  sizeId: UniqueEntityID[];
  materialId: UniqueEntityID;
  brandID: UniqueEntityID;
  price: number;
  stock: number;
  slug: Slug;
}

export class Product extends Entity<ProductProps> {}
